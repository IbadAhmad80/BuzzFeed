import React from "react";
import NavBar from "../navBar";
import Categories from "../Quizzes/quizzCategories";
import Styles from "../Quizzes/quizzes.module.css";
import NewsBar from "../HomePage/newsBar";
import TopArticle from "../HomePage/topArticle";
import Trending from "../HomePage/trending";
import Styles_1 from "../HomePage/home.module.css";
import MovieNews from "./movieNews";
import Styles_2 from "./movies.module.css";

export default function Movies() {
  return (
    <div>
      <NavBar />
      <div className={Styles_2.pic_1}></div>
      <div className={Styles_2.categories}>
        <Categories category={"All"} color={"blue"} />
        <Categories category={"TV"} color={"white"} />
        <Categories category={"Movies"} color={"white"} />
        <Categories category={"Streaming"} color={"white"} />
        <Categories category={"Interviews"} color={"white"} />
        <Categories category={"Selling Sunset"} color={"white"} />
        <Categories category={"Stranger Things"} color={"white"} />
        <Categories category={"Umbrella Academy"} color={"white"} />
        <Categories category={"SNL"} color={"white"} />
        <Categories category={"Disney"} color={"white"} />
      </div>
      <div className={Styles_2.categories_2}>
        <Categories category={"Awards Season"} color={"white"} />
        <Categories category={"What to Watch"} color={"white"} />
        <Categories category={"Riverdale"} color={"white"} />
        <Categories category={"The Bachelor"} color={"white"} />
        <Categories category={"Trailers"} color={"white"} />
        <Categories category={"Talk Shows"} color={"white"} />
        <Categories category={"Horror"} color={"white"} />
        <Categories category={"Friends"} color={"white"} />
        <Categories category={"Harry Poter"} color={"white"} />
        <Categories category={"The Office"} color={"white"} />
      </div>
      <div className={Styles_2.categories_3}>
        <Categories category={"Trending"} color={"white"} />
        <Categories category={"Peacock"} color={"white"} />
        <Categories category={"HBO Box"} color={"white"} />
        <Categories category={"Netflix"} color={"white"} />
        <Categories category={"Disney+"} color={"white"} />
        <Categories category={"Hulu"} color={"white"} />
        <Categories category={"Amazon Video"} color={"white"} />
        <Categories category={"Reality"} color={"white"} />
        <Categories category={"You"} color={"white"} />
        <Categories category={"OuterBanks"} color={"white"} />
      </div>

      <div className={Styles_1.mainGrid}>
        <div className={Styles_1.leftGrid}>
          {" "}
          <TopArticle
            description={
              "Here Are 15 Iconic Movie Guys — Are They Hotter Than The Actors Who Play Them??"
            }
            type={"2"}
          />
          <NewsBar />
        </div>
        <div className={Styles_1.rightGrid}>
          <MovieNews />
          <Trending type={"Trending Now"} />
        </div>
      </div>
    </div>
  );
}
