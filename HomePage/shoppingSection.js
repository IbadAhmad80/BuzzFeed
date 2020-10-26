import React from "react";
import Styles from "./shoppingSection.module.css";

export default function ShoppingSection() {
  return (
    <div
      style={{
        marginTop: "4.6vw",
        backgroundColor: "white",
        marginBottom: "2vw",
      }}
    >
      <div className={Styles.topLine}></div>
      <div className={Styles.heading}>Shopping</div>
      <div className={Styles.topGrid}>
        <div className={Styles.pic_1}></div>
        <div className={Styles.heading_1}>
          29 useful things under $50 to help make working from home better
        </div>
        <div className={Styles.description}>
          Inexperienced things that'll help make working from home "work" for
          you
        </div>
        <div className={Styles.pic_2}></div>
        <div className={Styles.recommendation}>
          Get even more product recommendation
        </div>
      </div>
    </div>
  );
}
