import  { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";

import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  // console.log(productId)

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);

      })
      .catch((err) => {
        console.log(`Error getting the Details of the product:`, err);
      }).finally(() => {
        setIsLoading(false) //  End loading (runs regardless of success/failure)...instead of writing setIsLoading(false) in both try and catch we can use finally
      })
      
  }, []);
  
  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard EachProduct={product} flex={true} renderDesc={true} addButton={true}/>}
    </LayOut>
  );
}

export default ProductDetail;
