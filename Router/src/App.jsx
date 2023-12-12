import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Error404 from "./Pages/Error404";
import User from "./Router-Hook-UseParams/Pages/User";
import Contact from "./Pages/Contact";
import Filter from "./Pages/Filter";
import C1 from "./Pages/C1";
import C2 from "./Pages/C2";
import C3 from "./Pages/C3";

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

              <Route path="/filter" element={<Filter/>}></Route>
              <Route path="/contact/" element={<Contact/>}>
                  <Route  path="C1" element={<C1/>}/>
                  <Route  path="C2" element={<C2/>}/>
                  <Route  path="C3" element={<C3/>}/>
              </Route>

            </Routes> 
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
