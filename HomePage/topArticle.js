import React from "react";
import Styles from "./topArticle.module.css";

export default function TopArticle({ description, type }) {
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          className={
            type === "1"
              ? Styles.picture_1
              : type === "2"
              ? Styles.picture_2
              : Styles.picture
          }
        ></div>
        <div className={Styles.description}>{description}</div>
      </div>
    </div>
  );
}
