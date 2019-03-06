import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/actionMain";
import styles from "./index.module.css";

class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    this.props.dispatch(addPost(data));
    this.getTitle.value = "";
    this.getMessage.value = "";
  };
  render() {
    return (
      <div className={styles.post_container}>
        <h2 className={styles.post_heading}>Create Post</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
