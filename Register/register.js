import React from "react";
import NavBar from "../navBar";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { IoLogoGoogle } from "react-icons/io";
import Styles from "../Sign_in/sign_in.module.css";
import { useHistory } from "react-router-dom";
export default function Register() {
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <div className={Styles.mainGrid}>
        <div className={Styles.heading}>Sign Up to BuzzFeed</div>
        <div className={Styles.sub_heading}>
          Or{" "}
          <span
            style={{ color: "blue" }}
            onClick={() => history.push("./sign_in")}
          >
            Sign in
          </span>{" "}
          to your account
        </div>
        <div className={Styles.facebook}>
          <span className={Styles.social_logo}>
            <AiFillFacebook />
          </span>
          Sign in with Facebook
        </div>
        <div className={Styles.google}>
          <span className={Styles.social_logo}>
            <IoLogoGoogle />
          </span>
          Sign in with Google
        </div>
        <div className={Styles.apple}>
          <span className={Styles.social_logo}>
            <AiFillApple />
          </span>
          Sign in with Apple
        </div>
        <div
          style={{ textAlign: "center", marginTop: "2vw", marginBottom: "2vw" }}
        >
          _____________________&nbsp;&nbsp;or&nbsp;&nbsp; ____________________
        </div>
        <form>
          <label className={Styles.labels}>Username or Email</label>
          <br />
          <input type="text" className={Styles.input_box}></input>
          <label className={Styles.labels}>Enter Password</label>
          <br />
          <input type="text" className={Styles.input_box}></input>
          <br />
          <label className={Styles.labels}>Confirm Your Password</label>
          <br />
          <input type="text" className={Styles.input_box}></input>
          <label className={Styles.labels}>Pick Username</label>
          <br />
          <input type="text" className={Styles.input_box}></input>
          <br />
          <button className={Styles.button}>Sign Up</button>
          <div className={Styles.bottom_text}>
            This site is protected by reCAPTCHA and the Google{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span>
            and <span style={{ color: "blue" }}>Terms of Service </span> apply
          </div>
          <div
            style={{
              textAlign: "center",
              color: "blue",
              fontSize: "1.1vw",
              marginTop: "1vw",
              marginBottom: "2vw",
            }}
          >
            By signing up, you are agreeing to our User Agreement and Privacy
            Policy.
          </div>
        </form>
      </div>
    </div>
  );
}
