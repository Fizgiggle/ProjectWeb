import React, { useContext } from 'react';
import {ShopContext} from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {clothes} = useContext(ShopContext);
  const {productId} = useParams();
  const product = clothes.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>

    </div>
  )
}

export default Product