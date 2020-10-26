import React from "react";
import SubNews from "./subNews";
import News_1 from "../assets/News_1.PNG";
import News_2 from "../assets/News_2.PNG";
import News_3 from "../assets/News_3.PNG";
import News_4 from "../assets/News_4.PNG";
import News_5 from "../assets/News_5.PNG";
import News_6 from "../assets/News_6.PNG";
import News_7 from "../assets/News_7.PNG";
import News_8 from "../assets/News_8.PNG";
import News_9 from "../assets/News_9.PNG";
import News_11 from "../assets/News_11.PNG";
import News_12 from "../assets/News_12.PNG";
import News_13 from "../assets/News_13.PNG";
import News_14 from "../assets/News_14.PNG";
import News_15 from "../assets/News_15.PNG";
import News_16 from "../assets/News_16.PNG";
import News_17 from "../assets/News_17.PNG";
import News_18 from "../assets/News_18.PNG";
import News_19 from "../assets/News_19.PNG";
import News_20 from "../assets/News_20.PNG";
import News_21 from "../assets/News_21.PNG";
import News_22 from "../assets/News_22.PNG";

export default function NewsBar({ type }) {
  return (
    <div>
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_13 : News_1}
        title={
          '33 Cleaning Products That Worked For Reviewers After They Tried "Everything"'
        }
        description={
          "All that loose pet hair on your couch and that unsightly red wine stain on your carpet just met their match. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_14 : News_2}
        title={
          "TV chaarcters that were that bad they honestly deserved each other"
        }
        description={"The 'Haunting of Bly Manor' has a mom problem"}
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_15 : News_3}
        title={"Joe jonas recreated this iconic 'camp rock' moment."}
        description={
          "All that loose pet hair on your couch and that unsightly red wine stain on your carpet just met their match. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_16 : News_4}
        title={"15 more things celebs did on tiktok this week"}
        description={
          "All that loose pet hair on your couch and that unsightly red wine stain on your carpet just met their match. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_17 : News_5}
        title={
          "Can We Guess If You are Single Or Taken Based On The Cute Animals You Pick?"
        }
        description={
          "All that loose pet hair on your couch and that unsightly red wine stain on your carpet just met their match. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_18 : News_6}
        title={
          '33 Cleaning Products That Worked For Reviewers After They Tried "Everything"'
        }
        description={
          "All that loose pet hair on your couch and that unsightly red wine stain on your carpet just met their match. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={News_7}
        title={
          "Can We Guess If You are Single Or Taken Based On The Cute Animals You Pick?"
        }
        description={
          "All that loose pet hair on your couch and that unsightly red wine stain on your carpet just met their match. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_20 : News_8}
        title={"7 Photo series that will challenge your view of the world."}
        description={"16 celebrity tiktoks that you missed badly this week. "}
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_21 : News_9}
        title={"The powder keg index and the election from the hell"}
        description={
          "All that loose pet hair on your couch and that unsightly red wine stain on your carpet just met their match. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_19 : News_11}
        title={"The powder keg index and the election from the hell"}
        description={
          "All that loose pet hair on your couch and that unsightly red wine stain on your carpet just met their match. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
      <SubNews
        fairytale={type === "Trending Quizzes" ? News_22 : News_12}
        title={"Campaign Has Sued To Stop Mail-In Ballot Counting In Nevada"}
        description={
          "The Trump Campaign Has Sued To Stop Mail-In Ballot Counting In Nevada's Biggest County. "
        }
        author={"Emma Lord"}
        uploaded_time={"1 hour ago"}
      />
    </div>
  );
}
