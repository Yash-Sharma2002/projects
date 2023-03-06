import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContext from "./context/Context";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

import { ProductData } from "./constants/data";

function App() {
  return (
    <>
      <MainContext>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* type means the type of products we are showing of same kind */}
            {
              ProductData.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={`/shop=${item.url}`}
                    element={<Shop data={item.Name} />}
                  />
                );
              })

            }
            <Route path="/shop=all" element={<Shop data={ProductData} />} />

            {/* id means the id of the product */}
            {/* <Route path="/shop=:type/product=:id" element={<Product />} /> */}
          </Routes>
        </BrowserRouter>
        <Footer />
      </MainContext>
    </>
  );
}


export default App;