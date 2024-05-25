import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase.js'
//o valor que será compartilhado.

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

export const userReducer = (state, action) =>{
console.log('Dispatched')
  console.log(action)
  const {type, payload} = action;

  // Sempre retorna um objeto
  // Quando type for x retorne um objeto que o novo valor.
  //posso usar o 'state' para retornar os valores anteriores e mudar apenas um valor dentro do objeto.
  // {...state, currentUser: payload}
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return{
        ...state, currentUser: payload
      }


    default:
throw new Error(`Unhandled type ${type}`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}


//Provider is the component que envolverá os components que querem, receber data.
export const UserProvider = ({ children }) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
console.log(currentUser)


const setCurrentUser = (user) =>{
  dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
}


  const value = { currentUser, setCurrentUser }

  useEffect(() => {
     onAuthStateChangedListener((user) => {
      if (user) {
       
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })


  }, [])


  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
}