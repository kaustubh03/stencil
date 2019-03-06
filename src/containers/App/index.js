import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../components/Home";
import Crud from "../../components/Crud";
import ApiCall from "../../components/ApiCall";
import Iconsexample from "../../components/IconsExample";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {" "}
          {/* display Home at default path as of now */}{" "}
          <main>
            <Route exact path="/" component={Home} />{" "}
            <Route exact path="/crud" component={Crud} />{" "}
            <Route exact path="/api" component={ApiCall} />{" "}
            <Route exact path="/react-icons" component={Iconsexample} />{" "}
          </main>{" "}
        </div>
      </Router>
    );
  }
}

export default App;
