import React from "react";
import Styles from "./quizSection.module.css";

export default function QuizSection() {
  return (
    <div
      style={{
        marginTop: "4.6vw",
        backgroundColor: "white",
        marginBottom: "2vw",
      }}
    >
      <div className={Styles.topLine}></div>
      <div className={Styles.heading}>Throw a Quiz Party</div>
      <div className={Styles.topGrid}>
        <div className={Styles.pic_1}></div>
        <div className={Styles.heading_1}>
          Dear Quiz Party Players, You can take now Buzzfeed Quizzes in real
          time with six players
        </div>
        <div className={Styles.description}>Lets go down the Quizzness</div>
        <div className={Styles.pic_2}></div>
        <div className={Styles.recommendation}>Try a Quiz Party</div>
      </div>
    </div>
  );
}
