import { useEffect, useState } from "react";
import styles from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../Loader/Loader";

function Results() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //use {} to destructure bcuz the result from useParams is an object
  const { categoryName } = useParams();
  // console.log(useParams())

  useEffect(() => {
    setIsLoading(true)
    
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(`Error fetching category detail:`, err);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.products_container}>
            {result?.map((currentProduct) => (
              <ProductCard
                key={currentProduct.id}
                EachProduct={currentProduct}
                addButton={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
