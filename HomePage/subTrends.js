import React from "react";
import Styles from "./subTrends.module.css";

export default function SubTrends({ title, fairytale }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + fairytale + ")",
          height: "20vh",
          width: "23vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "cover",
        }}
      ></div>
      <div className={Styles.title}>{title}</div>
    </div>
  );
}
