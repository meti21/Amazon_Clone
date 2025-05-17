import LayOut from '../../Components/LayOut/LayOut'
import styles from "./Payment.module.css"

import { useContext } from 'react';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from "../../Components/Product/ProductCard"

import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

function Payment() {

  const [{user,basket}] = useContext(DataContext)
  // console.log(user)

  // this counts totalitems for the checkout
  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();


  return (
    <LayOut>
      {/* header */}
      <div className={styles.payment__header}>
        Checkout ({totalItems}) items
      </div>

      {/* payment method */}
      <section className={styles.payment}>
        {/* address */}
        <div className={styles.flex}>
          <h3>Delivery Address</h3>

          <div>
            <div>
              <div>{user?.email}</div>
              <div>123 Maple Street</div>
              <div>Toronto, ON</div>
            </div>
          </div>
        </div>

        <hr />

        {/* product */}
        <div className={styles.flex}>
          <h3>Review items and delivery</h3>

          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} EachProduct={item} flex={true} />
            ))}
          </div>
        </div>

        <hr />

        {/* card form */}
        <div>
          <h3>Payment method</h3>

          <div className={styles.payment__card__container}>
            <div>
              <form action="">
                <CardElement onChange={handleChange()}/>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment