// import React from "react";
import styles from './Header.module.css'
import { IoMdMenu } from "react-icons/io";
import { Navbar, Nav } from "react-bootstrap";

const LowerHeader = () => {
  return (
    <Navbar expand="lg" className={styles.lower__container} variant="dark">
      <div className={styles.lower__nav_wrapper}>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.lower__nav}>
            <Nav.Link href="#" className={`${styles.nav_item} ${styles.all_item}`}>
              <IoMdMenu />
              <span>All</span>
            </Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>Today's Deals</Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>Customer Service</Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>Registry</Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>Gift ideas</Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>Sell</Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>Prime</Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>New Releases</Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>Electronics</Nav.Link>
            <Nav.Link href="#" className={styles.nav_item}>Books</Nav.Link>
            <Nav.Link href="#" className={`${styles.nav_item} ${styles.promo_item}`}>
              {/* Another Simple Favor - Watch now */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default LowerHeader;