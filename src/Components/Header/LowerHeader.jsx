import React from 'react'
import styles from "./Header.module.css";

import { AiOutlineMenu } from "react-icons/ai";

function LowerHeader() {
  return (
    <div className={styles.lower__container}>
      <ul>
        <li>
            <AiOutlineMenu />
          <p>
            All
          </p>
        </li>
        <li>
          <p>Today's Deals</p>
        </li>
        <li>
          <p>Costumer Service</p>
        </li>
        <li>
          <p>Registry</p>
        </li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader