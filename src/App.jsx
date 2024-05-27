
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Authentication from './routes/Authentication/Authentication'
import CheckoutList from "./routes/CheckoutList/CheckoutList";
import ShopCategory from "./routes/ShopCategory/ShopCategory";
import Shop from "./routes/Shop/Shop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../src/utils/firebase'
import {setCurrentUser} from './store/user/user-action'

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

