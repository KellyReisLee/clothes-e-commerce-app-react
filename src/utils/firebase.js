import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
//getDoc - means get data from doc
//setDoc - means set data from doc

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDIFP4k3JKbqSVHvRcMXNIzjmnCdPufdaM",
  authDomain: "e-commerce-crown-89620.firebaseapp.com",
  projectId: "e-commerce-crown-89620",
  storageBucket: "e-commerce-crown-89620.appspot.com",
  messagingSenderId: "825939189960",
  appId: "1:825939189960:web:5547fa9c08a7476b9285fd"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider)
//export const signInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProvider)
export const db = getFirestore();



export const createUserDocumentFromAuth = async (
  userAuth,
  adicionalInfo = {}) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);


  //if user does not exist: - Create a user
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...adicionalInfo
      })

    } catch (error) {
      console.log('error creating user', error.message);
    }

  }


  //If user exist.
  return userDocRef

}


// Creating user with email and password:
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return createUserWithEmailAndPassword(auth, email, password)

}

// Sign in user with email and password:
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return signInWithEmailAndPassword(auth, email, password)

}

// Sign in user with email and password:
export const signOutUser = async (email, password) => {
  if (!email || !password) return

  return await signOut(auth)

}