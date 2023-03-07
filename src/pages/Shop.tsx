import React from 'react'
import ProductLinear from '../components/ProductLinear'
import { ProductData } from '../constants/data'
import { MainContext } from '../context/Context'

export default function Shop() {

  let [data, setData] = React.useState<any>([])


  const { toTitle } = React.useContext(MainContext)
  const currentPage = window.location.pathname.slice(6)
  console.log(currentPage)

  React.useEffect(() => {
    if(currentPage === "all") return setData(ProductData)
    else setData(ProductData.filter((item: any) => item.url === currentPage))
  }, [currentPage])


  return (
    <>
      <div className="pt-32 w-11/12 text-center md:w-10/12 mx-auto">
        <ProductLinear data={data} />
      </div>
    </>
  )
}
