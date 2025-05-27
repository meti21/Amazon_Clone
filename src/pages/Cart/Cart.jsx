import  { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";

import styles from "./Cart.module.css";
import { MdDelete } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { Alert } from "react-bootstrap";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  //increment function
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET_KEY,
      item
    });
  };

  //Decrement function
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET_KEY,
      id
    });
  };

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
            basket?.map((item, i) => {
              return (
                <section key={i} className={styles.cart_product}>
                  <ProductCard
                    EachProduct={item}
                    renderDesc={true}
                    flex={true}
                    addButton={false}
                  />

                  <div className={styles.btn_container}>
                    <button
                      className={styles.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>

                    <span>{item.amount}</span>
                    
                    {item.amount === 1 ? (
                      <button
                        className={styles.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <MdDelete size={20} />
                      </button>
                    ) : (
                      <button
                        className={styles.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowDown size={20} />
                      </button>
                    )}
                  </div>
                </section>
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

            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
