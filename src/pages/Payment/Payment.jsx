import LayOut from "../../Components/LayOut/LayOut";
import styles from "./Payment.module.css";

import { ClipLoader } from "react-spinners";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import {Type} from '../../Utility/action.type'
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { db } from "../../Utility/firebase";

import { doc, setDoc, collection } from "firebase/firestore";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";


function Payment() {
  const [{ user, basket}, dispatch] = useContext(DataContext);
  // console.log(user)

  // this counts total items for the checkout
  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null); //can also be empty string
  const [processing, SetProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e)
    e?.error?.message ? setCardError(e.error.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    // to prevent refresh(if refresh, we will lose our state and mess everything)
    e.preventDefault();

    try {
      SetProcessing(true);
      // >>>>>>>>>>>>>>>>>>>>>1. backend (functions) ---> contact to the client secret
      const response = await axiosInstance.post(
        `/payments/create?total=${total * 100}`
      ); //adding total bcuz index.js in functions expect totalprice

      // console.log(response)
      const clientSecret = response?.data?.clientSecret;

      if (!clientSecret) {
        throw new Error("Client secret not received.");
      }

      // >>>>>>>>>>>>>>>>>>>>>2. client side (react side confirmation using stripe) and this will give us the succeeded payment intent
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });
      // console.log(confirmation)

      const { paymentIntent } = confirmation;
      // console.log(paymentIntent)

      if (confirmation.error) {
        console.error("Payment error:", confirmation.error.message);
        return;
      }
      // console.log("Payment successful:", confirmation);

      // >>>>>>>>>>>>>>>>>>>>3. after the confirmation ---> save order on filestore database, clear basket

      // modular Firebase SDK (v9+)
      await setDoc(doc(db, "users", user?.uid, "orders", paymentIntent.id), {
        basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      // Empty the basket
      dispatch({ type: Type.EMPTY_BASKET_KEY });

      // SetProcessing(false);
      navigate("/orders", { state: { msg: "You have placed a new Order" } });

      //* older namespaced syntax
      // await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id).set ({
      //   basket:basket,
      //   amount:paymentIntent.amount,
      //   created:paymentIntent.created
      // })
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      SetProcessing(false);
    }
  };

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
        <div className={styles.flex}>
          <h3>Payment method</h3>

          <div className={styles.payment__card__container}>
            <div className={styles.payment__details}>
              <form onSubmit={handlePayment}>

                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}

                {/* card element*/}
                <CardElement
                  className={styles.cardElement}
                  onChange={handleChange}
                />

                {/* price */}
                <div className={styles.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order</p> | <CurrencyFormat amount={total} />
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      processing ||total <= 0
                    }
                  >
                    <div className={styles.loading}>
                      {processing ? (
                        <>
                          <ClipLoader color="grey" size={12} />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Pay Now</span>
                      )}
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
