import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import Styles from "./navbar.module.css";
import { useHistory } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import BottomBar from "./bottomNav";

export default function NavBar() {
  const history = useHistory();

  return (
    <div>
      <div className={Styles.navBar}>
        <div className={Styles.flexStart}>
          <div style={{ display: "flex" }}>
            <div className={Styles.webLogo}>
              <RiMenuAddFill />
            </div>
            <div className={Styles.webName} onClick={() => history.push("/")}>
              BuzzFeed
            </div>
          </div>
        </div>
        <div className={Styles.centerFlex}>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("/quizzes")}
          >
            Quizzes
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("./movies")}
          >
            Tv & Movies
          </h3>
          <h3
            className={Styles.navLinks}
            // onClick={() => history.push("/membership")}
          >
            Shpping
          </h3>
          <h3
            className={Styles.navLinks}
            //     onClick={() => history.push("/about")}
          >
            Videos
          </h3>
          <h3
            className={Styles.navLinks}
            // onClick={() => history.push("/contact")}
          >
            News
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("/register")}
          >
            Register
          </h3>
        </div>
        <div className={Styles.endFlex}>
          <div style={{ display: "flex" }}>
            <h3
              className={Styles.sign_in}
              onClick={() => history.push("/sign_in")}
            >
              Sign in
            </h3>
            <div className={Styles.webLogo}>
              <FaSearchLocation />
            </div>
            <div
              style={{
                marginLeft: "5vw",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <h3 className={Styles.rotatedText}>Lol</h3>
              <h3 className={Styles.rotatedText}>Win</h3>
              <div className={Styles.stock}>
                <AiOutlineStock />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <BottomBar />
      </div>
    </div>
  );
}
