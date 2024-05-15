
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Authentication from './routes/Authentication/Authentication'
import Shop from "./routes/Shop/Shop";
import CheckoutList from "./components/CheckoutList/CheckoutList";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutList />} />
      </Route>
    </Routes>


  )
};

export default App;

