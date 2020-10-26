import React from "react";
import SubTrends from "./subTrends";
import Styles from "./trending.module.css";
import { AiOutlineStock } from "react-icons/ai";
import Capture_1 from "../assets/Capture_1.PNG";
import Capture_2 from "../assets/Capture_2.PNG";
import Capture_3 from "../assets/Capture_3.PNG";
import Capture_4 from "../assets/Capture_4.PNG";
import Capture_5 from "../assets/Capture_5.PNG";
import Capture_6 from "../assets/Capture_6.PNG";
import Capture_7 from "../assets/Capture_7.PNG";
import Capture_8 from "../assets/Capture_8.PNG";
import Capture_9 from "../assets/Capture_9.PNG";
import Capture_10 from "../assets/Capture_10.PNG";
import Capture_11 from "../assets/Capture_11.PNG";
import Capture_12 from "../assets/Capture_12.PNG";
import Capture_13 from "../assets/Capture_13.PNG";
import Capture_14 from "../assets/Capture_14.PNG";
import Capture_15 from "../assets/Capture_15.PNG";
import Capture_16 from "../assets/Capture_16.PNG";
import Capture_17 from "../assets/Capture_17.PNG";
import Capture_18 from "../assets/Capture_18.PNG";
import Capture_19 from "../assets/Capture_19.PNG";
import Capture_20 from "../assets/Capture_20.PNG";

export default function Trending({ type }) {
  return (
    <div
      style={{
        marginTop: "3vw",
        backgroundColor: "white",
        marginBottom: "2vw",
      }}
    >
      <div className={Styles.topLine} />

      <div className={Styles.heading}>
        <span
          style={{
            color: "darkblue",
            fontSize: "1.3vw",
            paddingRight: "1vw",
            paddingTop: "1vw",
          }}
        >
          <AiOutlineStock />
        </span>
        {type}
      </div>
      <div className={Styles.mainGrid}></div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "Listen: Debates, Very Important...But We Need To Talk About Mitch McConnell’s Hand"
          }
          fairytale={type === "Trending Quizzes" ? Capture_11 : Capture_1}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "This Nurse Method On How To Properly Shave Your Pubic Hair Is Going Viral"
          }
          fairytale={type === "Trending Quizzes" ? Capture_12 : Capture_2}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "Here is Donald Trump And Melania After The Final Debate Vs. Joe Biden And Jill"
          }
          fairytale={type === "Trending Quizzes" ? Capture_13 : Capture_3}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={"19 Ridiculously Easy Halloween Costume Ideas From TikTok"}
          fairytale={type === "Trending Quizzes" ? Capture_14 : Capture_4}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "People Have Nothing Left — Literally $0 — Because Of The Pandemic"
          }
          fairytale={type === "Trending Quizzes" ? Capture_15 : Capture_5}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "This TikTok Artist Is Going Viral For Drawing Disney Princesses As Villains And It is The Halloween Vibe You Did not Know You Needed"
          }
          fairytale={type === "Trending Quizzes" ? Capture_16 : Capture_6}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "Madewell Is Offering Up To 50% Off Best-Sellers So Now is Your Chance, People"
          }
          fairytale={type === "Trending Quizzes" ? Capture_17 : Capture_7}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "The Unique Way This Teacher Demonstrates Childbirth To Her Students Has Gone Viral On TikTok"
          }
          fairytale={type === "Trending Quizzes" ? Capture_18 : Capture_8}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "Only Millennials Will Remember These Oddly Specific Classroom Artifacts From The '90s"
          }
          fairytale={type === "Trending Quizzes" ? Capture_19 : Capture_9}
        />
      </div>
      <div className={Styles.trends}>
        <SubTrends
          title={
            "Chris Pratt's Costars Defended Him After People Called Him The Worst Hollywood Chris"
          }
          fairytale={type === "Trending Quizzes" ? Capture_20 : Capture_10}
        />
      </div>
    </div>
  );
}
