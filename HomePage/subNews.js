import React from "react";
import Styles from "./subNews.module.css";

export default function SubNews({
  fairytale,
  title,
  description,
  author,
  uploaded_time,
}) {
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          style={{
            backgroundImage: "url(" + fairytale + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "cover",
            gridColumn: "1",
            gridRow: "1/4",
          }}
        ></div>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.description}>{description}</div>

        <div className={Styles.uploaded_time}>
          {uploaded_time}
          <span style={{ marginLeft: "4vw" }}>{author}</span>
        </div>
      </div>
    </div>
  );
}
