import styles from './Auth.module.css'

import { Type } from '../../Utility/action.type';
import { useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from '../../Components/DataProvider/DataProvider'
import logo from '../../assets/logo.webp'

function Auth() {

  const [authEmail, setAuthEmail] = useState("")
  const [authPassword, setAuthPassword] = useState("")
  const [authError, setAuthError] = useState("")

  const [{user}, dispatch] = useContext(DataContext)
  console.log(user)

  const authHandler = async(e) => {
    try {
      e.preventDefault()
        // console.log(e.target.name)
        if(e.target.name === "signin"){
          // firebase auth
          const userSignInInfo = await signInWithEmailAndPassword(
            auth,
            authEmail,
            authPassword
          );
          // console.log(userSignInInfo)
            dispatch({
              type: Type.SET_USER_KEY,
              user: userSignInInfo.user
            })
    
        }else{

          const userSignUpInfo = await createUserWithEmailAndPassword(
            auth,
            authEmail,
            authPassword
          );
          // console.log(userSignUpInfo)
          dispatch({
            type: Type.SET_USER_KEY,
            user: userSignUpInfo.user,
          });
      }
      
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  }

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
            <input
              value={authEmail}
              onChange={(e) => setAuthEmail(e.target.value)}
              type="email"
              id="Email"
            />
          </div>

          <div>
            <label htmlFor="pass">Password</label>
            <input
              value={authPassword}
              onChange={(e) => setAuthPassword(e.target.value)}
              type="password"
              id="pass"
            />
          </div>

          <button
            type="button"
            onClick={authHandler}
            name= "signin"
            className={styles.login_button}
          >
            Sign in
          </button>
        </form>

        {/* agreement */}
        <p>
          The sign-in page and authentication system are included only to
          demonstrate how login functionality works in a modern web application.
          No real Amazon accounts can be used or accessed here, and you should
          not enter any real credentials, passwords, or personal information.
        </p>

        {/* Create account button */}
        <button
          type="button"
          onClick={authHandler}
          name="signup"
          className={styles.login__registerButton}
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}
export default Auth;
