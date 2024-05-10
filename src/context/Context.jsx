import { createContext, useState } from "react";

//o valor que será compartilhado.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})


//Provider is the component que envolverá os components que quere, receber data.
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
}