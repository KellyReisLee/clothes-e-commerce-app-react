import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase';
import FormInput from '../FormInput/FormInput';
import './sign-up-form.styles.scss'
import Button from '../Button/Button';


const SignUpForm = () => {
  const [data, setData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });



  const { displayName, email, password, confirmPassword } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!displayName || !email || !password || !confirmPassword) {
        alert('All fields are required!')
        return

      } else if (password !== confirmPassword) {
        alert('Password and Confirm Password must match')
        return
      }
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      setData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already exists! Please sign in.');
      }
      alert('Failed creating user', error);
    }
  }
  return (
    <div className='sign-up-container'>
      <h2>Don't have an Account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Display Name */}
        <FormInput
          label='Name'
          name='displayName'
          onChange={handleChange}
          value={data.displayName}
          type='text'
          required
        />

        {/* Email */}
        <FormInput
          label='Email'
          name='email'
          onChange={handleChange}
          value={data.email}
          type='email'
          required
        />
        {/* Password*/}
        <FormInput
          label='Password'
          name='password'
          onChange={handleChange}
          value={data.password}
          type='password'
          required
        />

        {/* ConfirmPassword */}
        <FormInput
          label='Confirm Password'
          name='confirmPassword'
          onChange={handleChange}
          value={data.confirmPassword}
          type='password'
          required
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default SignUpForm
