// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./index.module.css";
import { editPost } from "../../redux/actions/actionMain";
import { deletePost } from "../../redux/actions/actionMain";

class Posts extends Component {
  render() {
    return (
      <div className={styles.post}>
        <h2 className={styles.post_title}>
          {this.props.post ? this.props.post.title : null}
        </h2>
        <p className={styles.post_message}>
          {this.props.post ? this.props.post.message : null}
        </p>
        <div className={styles.control_buttons}>
          <button
            className={styles.edit}
            onClick={() =>
              this.props.dispatch(
                editPost(this.props.post ? this.props.post.id : null)
              )
            }
          >
            Edit
          </button>
          <button
            className={styles.delete}
            onClick={() =>
              this.props.dispatch(
                deletePost(this.props.post ? this.props.post.id : null)
              )
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default connect()(Posts);
