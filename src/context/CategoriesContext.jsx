import { createContext, useState, useEffect } from "react";

//import SHOP_DATA from '../shop-data.js'

import { getCategoriesAndDoc } from '../utils/firebase.js'

//Inicialize the context:
export const CategoriesContext = createContext({
  categoriesMap: {},

})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const value = { categoriesMap, setCategoriesMap }


  useEffect(() => {
    const getCategories = async () => {
      const categoryMapTotal = await getCategoriesAndDoc();
      console.log(categoryMapTotal);
      setCategoriesMap(categoryMapTotal)
    }
    getCategories()
  }, [])


  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}