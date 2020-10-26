import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import Styles from "./bottomNav.module.css";
// import { useHistory } from "react-router-dom";

export default function BottomBar() {
  //   const history = useHistory();

  return (
    <div>
      <div
        style={{
          borderTop: "2px solid grey",
          borderBottom: "2px solid grey",
        }}
      >
        <div className={Styles.centerFlex}>
          <div className={Styles.stock}>
            <AiOutlineStock />
          </div>
          <h3
            className={Styles.navLinks}
            //    onClick={() => history.push("/")}
          >
            Among Us
          </h3>
          <h3
            className={Styles.navLinks}
            // onClick={() => history.push("./courses")}
          >
            Trending Quizzes
          </h3>
          <h3
            className={Styles.navLinks}
            // onClick={() => history.push("/membership")}
          >
            Please Just Vote
          </h3>
          <h3
            className={Styles.navLinks}
            //     onClick={() => history.push("/about")}
          >
            Election 2020
          </h3>
          <h3
            className={Styles.navLinks}
            // onClick={() => history.push("/contact")}
          >
            Finding the Hope amid the Pandemic
          </h3>

          <div className={Styles.stock}>
            <AiOutlineStock />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
