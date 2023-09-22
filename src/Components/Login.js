import React from "react";
import { ReactDOM } from "react";
import styles from "./Login.module.css"
import { Link } from "react-router-dom";
function Login() {
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
          <p className={styles.title}>Register</p>
          <p className={styles.message}>
            Signup now and get full access to our app.
          </p>
          <div className={styles.flex}>
            <label>
              <input
                required=""
                placeholder=""
                type="text"
                className={styles.input}
              />
              <span>Firstname</span>
            </label>

            <label>
              <input
                required=""
                placeholder=""
                type="text"
                className={styles.input}
              />
              <span>Lastname</span>
            </label>
          </div>

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
          <label>
            <input
              required=""
              placeholder=""
              type="password"
              className={styles.input}
            />
            <span>Confirm password</span>
          </label>
          <button className={styles.submit}>Submit</button>
          <p className="signin">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
