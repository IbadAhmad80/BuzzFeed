import React from "react";
import Styles from "./news.module.css";

export default function News() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className={Styles.topLine}></div>
      <div className={Styles.heading}>BUZZFEED NEWS</div>
      <div className={Styles.content_1}>
        Dozens of advocacy groups have been hard at work trying to prepare
        Americans for how to take on Trump if he refuses to leave office.{" "}
      </div>
      <div className={Styles.content_2}>
        An internal Wall Street Journal report reveals how the newspaper is
        struggling to shift to digital-first coverage and reach a younger
        audience.{" "}
      </div>
      <div className={Styles.content_3}>
        From falling in love on FaceTime to desperately texting exes, we spoke
        to eight people about their pandemic dating experiences{" "}
      </div>
    </div>
  );
}
