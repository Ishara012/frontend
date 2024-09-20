
import React, { useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
 

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const currentProduct = all_product.find((e) =>  e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={currentProduct} />
      <div>{currentProduct.name}</div>

       
      <ProductDisplay product={currentProduct} />

      <DescriptionBox/>

        
    </div>
  );
};

export default Product;

