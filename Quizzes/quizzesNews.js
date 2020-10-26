import React from "react";
import Styles from "./quizzessNews.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoGoogle } from "react-icons/io";

export default function QuizNews() {
  return (
    <div>
      <div style={{ backgroundColor: "red" }}>
        <div className={Styles.mainGrid}>
          <div className={Styles.heading}>BuzzFeed</div>
          <div className={Styles.sub_heading}>Quizzes</div>
          <div className={Styles.content}>
            Want the latest quizzes delivered? Sign up for the Quizzes
            newsletter
          </div>
          <form>
            <input
              style={{
                marginTop: "1.5vw",
                paddingLeft: "1vw",
                marginLeft: "1.5vw",
                height: "5vh",
                marginBottom: "2vw",
              }}
              type="text"
              placeholder="Email Adress (Required)"
            ></input>
            <button className={Styles.sign_up}>Sign Up</button>
          </form>
        </div>
      </div>
      <div className={Styles.facebook}>
        <span className={Styles.social_logo}>
          <AiFillFacebook />
          &nbsp;&nbsp;&nbsp;
        </span>
        Sign in with Facebook
      </div>
      <div className={Styles.google}>
        <span className={Styles.social_logo}>
          <IoLogoGoogle />
          &nbsp;&nbsp;&nbsp;
        </span>
        Sign in with Google
      </div>
    </div>
  );
}
