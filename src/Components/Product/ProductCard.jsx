import React from 'react'
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

import styles from './Product.module.css'

function ProductCard({EachProduct}) {

    const {image, title, id, rating, price} = EachProduct

  return (
    <div className={styles.card__container}>
      <a href="">
        <img src={image} alt="" />
      </a>

      <div>
        <h3>{title}</h3>
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} readOnly />

          {/* rating counter(number of ppl rating the product) */}
          <small>{rating.count}</small>
        </div>

        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        <button className={styles.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard