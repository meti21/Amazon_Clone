import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../../pages/Loader/Loader";

import styles from "./Product.module.css";

function Product() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //         axios.get('https://fakestoreapi.com/products')
  //         .then((res) => {setProducts(res.data)})
  //         .catch((err) => {console.log(`Error while fetching the data:`,err)})
  // },[])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);

        // console.log(res.data)
      } catch (err) {
        console.log("Error while fetching the data:", err);

      } finally {
        setIsLoading(false); //  End loading (runs regardless of success/failure)...instead of writing setIsLoading(false) in both try and catch we can use finally
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Key attribute is not obligatory, but for effective mapping it is advisable to provide unique identifier */}
      {/* we're not just writing HTML here — we're using JavaScript logic (a ternary operator) to conditionally render one of two components so we have to put them in {} */}

      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.products_container}>
          {products?.map((singleProduct) => (
            <ProductCard key={singleProduct.id} EachProduct={singleProduct} addButton={true}/>
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
