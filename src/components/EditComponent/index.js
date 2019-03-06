// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { updatePost } from "../../redux/actions/actionMain";
type Props = {};
type State = {};
class Editcomponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.id;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch(updatePost(this.props.post.id, data));
  };
  render() {
    return (
      <div
        key={this.props.post ? this.props.post.id : null}
        className={styles.post}
      >
        <form className={styles.form} onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.post ? this.props.post.title : null}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            defaultValue={this.props.post ? this.props.post.message : null}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(Editcomponent);
