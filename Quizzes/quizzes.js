import React from "react";
import NavBar from "../navBar";
import Categories from "./quizzCategories";
import Styles from "./quizzes.module.css";
import NewsBar from "../HomePage/newsBar";
import TopArticle from "../HomePage/topArticle";
import Trending from "../HomePage/trending";
import Styles_1 from "../HomePage/home.module.css";
import QuizNews from "./quizzesNews";
import QuizSection from "./quizSection";

export default function Quizzes() {
  return (
    <div>
      <NavBar />
      <div className={Styles.heading}>BuzzFeed Quizzes</div>
      <div className={Styles.subHeading}>
        We've got all the quizzes you love to binge! Come on in and hunker down
        for the long haul.
      </div>
      <div className={Styles.categories}>
        {" "}
        <Categories category={"Latest"} color={"blue"} />
        <Categories category={"GeoGraphy"} color={"white"} />
        <Categories category={"Zodiac"} color={"white"} />
        <Categories category={"Disney"} color={"white"} />
        <Categories category={"Food"} color={"white"} />
        <Categories category={"Love"} color={"white"} />
        <Categories category={"Trivia"} color={"white"} />
        <Categories category={"K-Pop"} color={"white"} />
      </div>
      <div className={Styles_1.mainGrid}>
        <div className={Styles_1.leftGrid}>
          {" "}
          <TopArticle
            description={
              "Can We Accurately Guess Your Age Based On The Pop-Tart Flavor You Create?"
            }
            type={"1"}
          />
          <NewsBar type={"Trending Quizzes"} />
          <QuizSection />
        </div>
        <div className={Styles_1.rightGrid}>
          <QuizNews />
          <Trending type={"Trending Quizzes"} />
        </div>
      </div>
    </div>
  );
}
