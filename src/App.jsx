
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {



  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Home />} />
      </Route>
    </Routes>


  )
};

export default App;

