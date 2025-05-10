import React from 'react'
import styles from './Header.module.css'
import LowerHeader from './LowerHeader';

import { Link } from 'react-router-dom';
import {useContext} from 'react'

import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { DataContext } from '../DataProvider/DataProvider';

function Header() {

  const [{basket},dispatch] = useContext(DataContext)
  // distructure the state and we can get the vallue of items in the basket
  // console.log(basket)
  // console.log(basket.length)

  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header__container}>
          {/* logo section*/}
          <div className={styles.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

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
            <Link to="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/330px-Flag_of_Canada_%28Pantone%29.svg.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            {/* three components */}
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>

            {/* orders */}
            <Link to="/orders">
              <div>
                <p>returns</p>
                <span>& Orders</span>
              </div>
            </Link>

            {/* cart */}
            <Link to="/cart" className={styles.cart}>
              <BiCart />
              <span> {basket.length} </span>
            </Link>
          </div>
        </div>
      </section>

      <LowerHeader />
    </section>
  );
}

export default Header