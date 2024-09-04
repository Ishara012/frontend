import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrum';
  
 

const Product = () => {
  const{all_product} = useContext(ShopContext);
  const{productId} = useParams();
  const Product = all_product.find((e)=>e.id === Number(productId))



  return (
    <div>
      <Breadcrums Product={Product}/>
       
       {/* added test images for image view and product name */}
       <img src={Product.image} alt=''/>
       <div>{Product.name}</div>
      
    </div>
  )
}

export default Product
