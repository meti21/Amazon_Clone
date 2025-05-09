import React, { useState, useEffect } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import styles from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';

function ProductDetail() {

  const {productId} = useParams()
  // console.log(productId)

  const [product, setProduct] = useState({})
  useEffect(()=> {
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{setProduct(res.data)
    }).catch((err)=> {console.log(`Error getting the Detailes of the product:`,err)})
  },[])
  return (
    <LayOut>
      {/* <ProductCard EachProduct={product}/> */}

      {/* This ensures ProductCard only renders after the product is fetched. */}
      {product && product.id ? (
        <ProductCard EachProduct={product} />
      ) : (
        <p>Loading product...</p>
      )}
    </LayOut>
  );
}

export default ProductDetail