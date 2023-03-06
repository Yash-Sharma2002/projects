import React from 'react'
import ProductLinear from '../components/ProductLinear'
import { MainContext } from '../context/Context'

export default function Shop() {

  const { toTitle } = React.useContext(MainContext)
  const currentPage = window.location.pathname.slice(6)
  console.log(currentPage)


  return (
    <>
      <div className="pt-32 w-11/12 text-center md:w-10/12 mx-auto">
        <h1 className="mx-auto text-[24px] px-3 md:text-[48px] font-[700]">{toTitle(currentPage)} Products</h1>
        <ProductLinear data={ProductLinear[0]} />
        {/* {
          data.map((item: any) => {

        } */}
      </div>
    </>
  )
}
