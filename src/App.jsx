
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Authentication from './routes/Authentication/Authentication'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>


  )
};

export default App;

