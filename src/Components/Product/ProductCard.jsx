import { useContext } from 'react'
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import {Link} from 'react-router-dom';
import {Type} from '../../Utility/action.type'; 
import { DataContext } from "../DataProvider/DataProvider";

import styles from './Product.module.css'

function ProductCard({ EachProduct, flex, renderDesc, addButton }) {
  
  const { image, title, id, rating, price, description } = EachProduct;

  const [state, dispatch] = useContext(DataContext);
  console.log(state)

  const addToCart = () => {
    dispatch({
      // type comes from action.type.js
      type: Type.ADD_TO_BASKET_KEY,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${styles.card__container} ${
        flex ? styles.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>

        {renderDesc && <div >{description}</div>}

        <div className={styles.rating}>

          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} readOnly />

          {/* rating counter(number of ppl rating the product) */}
          <small>{rating?.count}</small>
        </div>

        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        {addButton && (
          <button className={styles.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard