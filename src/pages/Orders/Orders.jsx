import { useContext, useState, useEffect } from "react";
import styles from "./Orders.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";

import { db } from "../../Utility/firebase";

import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

import { DataContext } from "../../Components/DataProvider/DataProvider";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Create reference to user's orders collection
      const ordersRef = collection(
        doc(collection(db, "users"), user.uid),
        "orders"
      );

      // Create query to order by 'created' descending
      const ordersQuery = query(ordersRef, orderBy("created", "desc"));

      // Subscribe to realtime updates
      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        // console.log(snapshot);
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Cleanup subscription on unmount or user change
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.orders__container}>
          <h4>Your Orders</h4>

          {/* if accessed by another authenticated user the following will display */}
          {orders?.length == 0 && (
            <div className={styles.info}>
              You don't have orders yet.
            </div>
          )}

          {/* ordered items referred from filestore */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard flex={true} EachProduct={order} key={order.id} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
