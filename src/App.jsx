
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Authentication from './routes/Authentication/Authentication'
import Shop from "./routes/Shop/Shop";
import CheckoutList from "./components/CheckoutList/CheckoutList";
import ShopCategory from "./routes/ShopCategory/ShopCategory";

const App = () => {

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

