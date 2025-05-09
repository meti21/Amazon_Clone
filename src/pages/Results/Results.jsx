import React, { useEffect, useState } from "react";
import styles from './Results.module.css'
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [result, setResult] = useState([]);

  //use {} to distructure bcuz the result from useParams is an object
  const { categoryName } = useParams();
  // console.log(useParams())

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(`Error fetching category detail:`, err);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        <div className={styles.products_container}>
          {result?.map((currentProduct) => (
            <ProductCard key={currentProduct.id} EachProduct={currentProduct} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
