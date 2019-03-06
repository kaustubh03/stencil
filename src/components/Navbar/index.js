// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import { Nav, NavItem } from "react-bootstrap";
type Props = {};
type State = {};
class Navbar extends Component<Props, State> {
  render() {
    return (
      <Nav bsStyle="pills" activeKey={1}>
        <NavItem className="btn" href="/crud" title="CRUD Example">
          CRUD Example
        </NavItem>
        <NavItem
          eventKey={2}
          className="btn"
          title="API Calls Using Axios"
          href="/api"
        >
          API Example
        </NavItem>
        <NavItem eventKey={3} className="btn" href="/react-icons">
          React Icons
        </NavItem>
      </Nav>
    );
  }
}
export default Navbar;
