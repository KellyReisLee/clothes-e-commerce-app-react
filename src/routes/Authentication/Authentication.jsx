import React from 'react'
import './authentication.styles.scss'

import SignUpForm from '../../components/SignUp-form/SignUpForm.jsx';
import SignInForm from '../../components/SignIn-form/SignInForm.jsx';

const SignIn = () => {
  return (
    <div className='main-container'>
      <h1>Sign in on Page</h1>
      <div className='display-forms'>
        <SignInForm />
        <SignUpForm />
      </div>
    </div>

  )
}

export default SignIn
