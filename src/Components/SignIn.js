import React from "react";
import { ReactDOM } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className={styles.container}>
      <div
        className={styles.glass}
        style={{
          paddingTop: "1em",
          height: "600px",
          marginTop: "50px",
          width: "400px",
        }}
      >
        <form className={styles.form}>
          <p className={styles.title}>Sign In</p>
          <p className={styles.message}>Great to have you back.</p>

          <label>
            <input
              required=""
              placeholder=""
              type="email"
              className={styles.input}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="password"
              className={styles.input}
            />
            <span>Password</span>
          </label>

          <button className={styles.submit}>Submit</button>
          <p className="signin">
            Dont have an account? <Link to="/">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
