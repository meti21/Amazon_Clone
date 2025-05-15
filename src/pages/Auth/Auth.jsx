import React from 'react'
import styles from './Auth.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'

function Auth() {
  return (
    <section className={styles.login}>
      {/* logo*/}
      <Link>
        <img src={logo} alt="logo" />
      </Link>

      {/* form */}
      <div className={styles.login__container}>
        <h1>Sign In</h1>

        <form action="">
          <div>
            <label htmlFor="Email">E-mail</label>
            <input type="email" id="Email" />
          </div>

          <div>
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" />
          </div>

          <button className={styles.login_button}>Sign in</button>
        </form>

        {/* agreement */}
        <p>
          The sign-in page and authentication system are included only to
          demonstrate how login functionality works in a modern web application.
          No real Amazon accounts can be used or accessed here, and you should
          not enter any real credentials, passwords, or personal information.
        </p>

        {/* Create account button */}
        <button className={styles.login__registerButton}>Create your Amazon Account</button>
        
      </div>
    </section>
  );
}

export default Auth