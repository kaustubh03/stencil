// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import PostForm from "../PostForm";
import AllPost from "../AllPost";

type Props = {};
type State = {};
class Crud extends Component<Props, State> {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.navbar}>
          <h2 className={styles.center}>CRUD Example: PostIt</h2>
        </div>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}
export default Crud;
