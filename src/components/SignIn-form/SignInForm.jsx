import React, { useState } from 'react'
import './sign-in-form.styles.scss'
import FormInput from '../FormInput/FormInput'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.js'
import Button from '../Button/Button'

const SignInForm = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = data;
    try {

      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response);
      setData({
        email: '',
        password: ''
      })
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        console.log('Incorrect Credentials. Please, check your email and password.');
      }
      console.log(error.code);
    }
  }

  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();


    await createUserDocumentFromAuth(user)

  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an Account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Display Name */}
        <FormInput
          label='Email'
          name='email'
          onChange={handleChange}
          value={data.email}
          type='text'
          required
        />
        {/* Display Name */}
        <FormInput
          label='Password'
          name='password'
          onChange={handleChange}
          value={data.password}
          type='password'
          required
        />
        <div className='display-button'>
          <Button type='submit' >Sign in</Button>
          <Button type='button' buttonType='google' onClick={logGoogleUser}>Sign in with Google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm