import React from 'react'

export default function Product() {
  const [data, setData] = React.useState<any>({
    productId:'',
    shopName:'',
  });
  React.useEffect(() => {
    const url = window.location.pathname.slice(1);
    console.log(url);
    
    // const urlArray = url.split('/');
    // const product = urlArray[0].split('=')[1];
    // const shop = urlArray[1].split('=')[1];
    // setData((prev) => {
    //   return (
    //     {...prev,productId:product,shopName:shop}
    //   )
    // });
    // console.log(product,shop)
  }, []);
  return (
    <div>Product</div> 
  )
}
