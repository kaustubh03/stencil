import React, { Component } from "react";
import styles from "./index.module.css";
import NavComponent from "../Navbar";

class Home extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.App_header}>
          <div>
            <h1>React Boilerplate</h1>
            <h1>React Boilerplate</h1>
            <h1>React Boilerplate</h1>
          </div>
          <br />
          <div className={styles.description}>
            <h6>
              With CRAv2, Redux, Hygen, Storybook, React Bootstrap, React Icons
            </h6>
          </div>

          <NavComponent />
        </header>
      </div>
    );
  }
}

export default Home;
