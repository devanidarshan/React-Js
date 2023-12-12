import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Error404 from "./Pages/Error404";
import User from "./Router-Hook-UseParams/Pages/User";

function App() {
  return (
    <>
      <div className="">
        <div className="">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/user/:name" element={<User/>}></Route>
              <Route path="/*" element={<Error404/>}></Route>
            </Routes> 
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
