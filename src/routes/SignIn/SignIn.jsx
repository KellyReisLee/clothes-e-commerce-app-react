import React from 'react'
// Provider for a google sign in
//Implement for a Face book also!!!
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.js'
import SignUpForm from '../../components/SignUp-form/SignUpForm.jsx';

const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);

    const userDocRef = await createUserDocumentFromAuth(response.user)
    console.log(userDocRef);
  }

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
