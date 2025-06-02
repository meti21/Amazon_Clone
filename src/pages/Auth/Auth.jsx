import styles from './Auth.module.css'

import { Type } from '../../Utility/action.type';
import { useState,useContext} from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
// Imports the configured Firebase auth object
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from '../../Components/DataProvider/DataProvider'
import { ClipLoader } from 'react-spinners';
import logo from '../../assets/logo.webp'

function Auth() {

  const [authEmail, setAuthEmail] = useState("")
  const [authPassword, setAuthPassword] = useState("")
  const [authError, setAuthError] = useState("")
  const [loading, setLoading] = useState({signIn: false, signUp:false})

  const [{user}, dispatch] = useContext(DataContext)
  const navigate = useNavigate()

  const navStateData = useLocation()


  const authHandler = async (e) => {
    e.preventDefault();
    // safely convert to lowercase and trim whitespace for consistent action handling and compare it with signin
    const action = e.target.name?.toLowerCase().trim();

    // Determine which loading key to update
    const dynamicLoadingKey = (action === "signin") ? "signIn" : "signUp";

    try {
      // The brackets [ ] in [loadingKey] mean “use the value of this variable as the key name,” not the variable’s name itself.
      setLoading((prev) => ({ ...prev, [dynamicLoadingKey]: true }));

      // declare userInfo first without a value, then assign it inside the if-else blocks.
      let userInfo;
      if (dynamicLoadingKey === "signIn") {
        userInfo = await signInWithEmailAndPassword(
          auth,
          authEmail,
          authPassword
        );
      } else {
        userInfo = await createUserWithEmailAndPassword(
          auth,
          authEmail,
          authPassword
        );
      }

      dispatch({
        type: Type.SET_USER_KEY,
        user: userInfo.user,
      });
      navigate(navStateData?.state?.redirect || "/")
    } catch (error) {
      setAuthError(error.message);
      // finally statement always runs, whether an error occurred or not.
    } finally {
      setLoading((prev) => ({ ...prev, [dynamicLoadingKey]: false }));
    }
  };
  

  return (
    <section className={styles.login}>

      {/* logo*/}
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>

      {/* form */}
      <div className={styles.login__container}>
        <h1>Sign In</h1>

        {navStateData?.state?.msg && (
          <small className={styles.message}>
            {/* the msg only displays if we were trying to pay without signin */}
            {navStateData?.state?.msg}
          </small>
        )}

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
            name="signin"
            className={styles.login_button}
          >
            {loading.signIn ? <ClipLoader size={15} color="#000" /> : "Sign In"}

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
          {loading.signUp ? (
            <ClipLoader size={15} color="#000" />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {authError && (
          <small
            style={{
              color: "#B12704",
              fontWeight: "600",
              marginTop: "4px",
              display: "block",
            }}
          >
            {authError}
          </small>
        )}
      </div>
    </section>
  );
}
export default Auth;
