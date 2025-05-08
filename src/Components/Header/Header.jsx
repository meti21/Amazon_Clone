import React from 'react'
import styles from './Header.module.css'
import LowerHeader from './LowerHeader';

import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

function Header() {
  return (
    <>
      <section>
        <div className={styles.header__container}>
          {/* logo section*/}
          <div className={styles.logo__container}>
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>

            {/* delivery */}
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>

              <div>
                <p>Delivered to</p>
                <span>Canada</span>
              </div>
            </div>
          </div>

          {/* search section*/}
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={40} />
          </div>

          {/*right side link  */}
          <div className={styles.order__container}>
            <a href="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/330px-Flag_of_Canada_%28Pantone%29.svg.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>

            {/* three components */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>

            {/* orders */}
            <a href="">
              <div>
                <p>returns</p>
                <span>& Orders</span>
              </div>
            </a>

            {/* cart */}
            <a href="" className={styles.cart}>
              <BiCart />
              <span> 0 </span>
            </a>
          </div>
        </div>
      </section>

      <LowerHeader/>
    </>
  );
}

export default Header