import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';

import styles from "./Cart.module.css";
import { Alert } from 'react-bootstrap';

function Cart() {
  const [{basket,user}, dispatch] = useContext(DataContext)

  const total = basket.reduce((amount,item)=> {
    return item.price + amount
  },0)

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping basket</h3>
          <hr />

          {basket?.length == 0 ? (
            <Alert variant="info">Oppss! No item in your cart</Alert>
          ) : (
            basket?.map((itemInCart, i) => {
              return (
                <ProductCard
                  key={i}
                  EachProduct={itemInCart}
                  renderDesc={true}
                  flex={true}
                  addButton={false}
                />
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart