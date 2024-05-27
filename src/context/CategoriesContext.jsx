import { createContext, useEffect, useState,  } from "react";

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