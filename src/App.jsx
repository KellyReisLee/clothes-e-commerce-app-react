
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/SignIn/SignIn";

const App = () => {




  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>


  )
};

export default App;

