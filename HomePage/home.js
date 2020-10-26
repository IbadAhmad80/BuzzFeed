import React from "react";
import NavBar from "../navBar";
import News from "./news";
import TopArticle from "./topArticle";
import Styles from "./home.module.css";
import Trending from "./trending";
import NewsBar from "./newsBar";
import ShoppingSection from "./shoppingSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={Styles.mainGrid}>
        <div className={Styles.leftGrid}>
          {" "}
          <TopArticle
            description={
              " It’ll Take A Real Movie Fan To Match These Disney Parents To Their Kids"
            }
            type={"0"}
          />
          <NewsBar />
          <ShoppingSection />
          <NewsBar type={"Trending Quizzes"} />
        </div>
        <div className={Styles.rightGrid}>
          <News />
          <Trending type={"Trending Now"} />

          <Trending type={"Trending Quizzes"} />
        </div>
      </div>
    </div>
  );
}
