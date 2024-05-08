import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase';


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


  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault()


    try {
      if (password !== confirmPassword) {
        return
      }
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName })
      setData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Email already exists!');
      }
      console.log('Failed creating user', error);
    }


  }
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        {/* Display name */}
        <label htmlFor='displayName'>Display Name</label>
        <input name='displayName' onChange={handleChange} value={data.displayName} type='text' id='displayName' required />

        {/* Email */}
        <label htmlFor='email'>Email</label>
        <input name='email' onChange={handleChange} value={data.email} type='email' id='email' required />
        {/* Password */}
        <label htmlFor='password'>Password</label>
        <input name='password' onChange={handleChange} value={data.password} type='password' id='password' required />

        {/* Confirm password */}
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input name='confirmPassword' onChange={handleChange} value={data.confirmPassword} type='password' id='confirmPassword' required />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm
