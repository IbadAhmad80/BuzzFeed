import React from "react";
import Styles from "../Quizzes/quizzessNews.module.css";

export default function MovieNews() {
  return (
    <div style={{ backgroundColor: "darkBlue" }}>
      <div className={Styles.mainGrid}>
        <div className={Styles.heading}>TV and Movies</div>
        <div className={Styles.content}>
          Want the latest nees about Shows delivered? Sign up for the newsletter
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
  );
}
