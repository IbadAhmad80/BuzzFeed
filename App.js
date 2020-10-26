import React from "react";
import Home from "./HomePage/home";
import { Route, Switch } from "react-router-dom";
import Sign_in from "./Sign_in/sign_in";
import Quizzes from "./Quizzes/quizzes";
import Register from "./Register/register";
import Movies from "./TV_Movies/movies";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(247, 248, 247)", overflow: "hidden" }}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sign_in" component={Sign_in} />
        <Route path="/quizzes" component={Quizzes} />
        <Route path="/register" component={Register} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
