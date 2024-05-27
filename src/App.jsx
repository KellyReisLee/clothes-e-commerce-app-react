
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Authentication from './routes/Authentication/Authentication'
import CheckoutList from "./routes/CheckoutList/CheckoutList";
import ShopCategory from "./routes/ShopCategory/ShopCategory";
import Shop from "./routes/Shop/Shop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth, getCategoriesAndDoc } from './utils/firebase.js'
import {setCurrentUser} from './store/user/user-action'
import { setCategoriesMap } from './store/categories/category-actions.js';


//import SHOP_DATA from '../shop-data.js'

const App = () => {
const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChangedListener((user) => {
     if (user) {
       createUserDocumentFromAuth(user)
     }
     dispatch(setCurrentUser(user))
   })


 }, [])


 useEffect(() => {
  const getCategories = async () => {
    const categoriesMap = await getCategoriesAndDoc('categories');
    dispatch(setCategoriesMap(categoriesMap))
    //console.log(categoriesMap)
   
  }
  getCategories()
}, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutList />} />
        <Route path="shop/:category" element={<ShopCategory />} />
      </Route>
    </Routes>


  )
};

export default App;

