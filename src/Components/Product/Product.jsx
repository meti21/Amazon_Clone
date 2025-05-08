import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

import styles from './Product.module.css'
function Product() {
  const [products, setProducts] = useState();

  // useEffect(() => {
  //         axios.get('https://fakestoreapi.com/products')
  //         .then((res) => {setProducts(res.data)})
  //         .catch((err) => {console.log(`Error while fetching the data:`,err)})
  // },[])

useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        } catch (err) {
        console.log("Error while fetching the data:", err);
        }
    };

    fetchData();
    }, []);


  return (
    <section className={styles.products_container}>
      {/* use () to return JSX implicitly inside the arrow function in map but of you use {} you have to return the component */}
      {/* Key attribute is not obligatory, but for effective mapping it is advisable to provide unique identifier */}

      {products?.map((singleproduct) => (
        <ProductCard key={singleproduct.id} EachProduct={singleproduct} />
      ))}
    </section>
  );
}

export default Product