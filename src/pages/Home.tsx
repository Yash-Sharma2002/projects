import React from 'react'
import About from '../components/About'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import OfferedProducts from '../components/OfferedProducts'
import Top from '../components/Top'
import WhyUs from '../components/WhyUs'

import { ProductData } from '../constants/data'

export default function Home() {
  return (
    <>
      <Top />
      <About />
      <WhyUs />
      <OfferedProducts />
      <div className="my-16 md:my-24 w-11/12 text-center md:w-10/12 mx-auto">
        <h1 className="mx-auto text-[24px] px-3 md:text-[48px] font-[700]">Checkout Our Products</h1>
       <Carousel num={0} productsData={ProductData[0]}  />
       <Carousel num={1} productsData={ProductData[1]}  />
       <Carousel num={3} productsData={ProductData[3]}  />
       <Carousel num={5} productsData={ProductData[5]}  />
       <Carousel num={8} productsData={ProductData[8]}  />
      </div>
    </>
  )
}
