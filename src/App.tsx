import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContext from "./context/Context";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

 function App() {
  return (
    <>
      <MainContext>
        {/* <Navbar> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* type means the type of products we are showing of same kind */}
              <Route path="/shop=:id" element={<Shop />} />

              {/* id means the id of the product */}
              {/* <Route path="/shop=:type/product=:id" element={<Product />} /> */}
            </Routes>
          </BrowserRouter>
        {/* </Navbar> */}
      </MainContext>
    </>
  );
}


export default App;