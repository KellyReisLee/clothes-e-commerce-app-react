import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

} from 'firebase/auth'
//getDoc - means get data from doc


import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
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



// Sending the whole data:
export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  });

  await batch.commit()
  console.log('done');
}


export const getCategoriesAndDoc = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  //await Promise.reject(new Error('fetch data Failed!'))
  const querySnapshot = await getDocs(q)

  return querySnapshot.docs.map(docSnapShot => docSnapShot.data())
}



export const createUserDocumentFromAuth = async (
  userAuth,
  adicionalInfo = {}) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)


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

// Sign out user with email and password:
export const signOutUser = async () => await signOut(auth);

// Sign in Observer Listener:
export const onAuthStateChangedListener = async (callback) => onAuthStateChanged(auth, callback)

export default fireBaseApp