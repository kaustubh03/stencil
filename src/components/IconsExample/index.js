// @flow
import React, { Component } from "react";
import { FaBeer } from "react-icons/fa";
import { FaAdjust } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaCodiepie } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import styles from "./index.module.css";
import { Grid, Row, Col } from "react-bootstrap";
type Props = {};
type State = {};
class Iconsexample extends Component<Props, State> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper_container}>
          <div className={styles.wrapper_heading}>React Icons Example</div>
          <h6>
            Also Have Support For Font Awesome, Material Design, Typicons,
            Github Octicons and Ionicons
          </h6>
          <br />
          <Grid>
            <Row>
              <Col md={12}>
                Lets go for a <FaBeer />?<br />
              </Col>
              <Col md={12}>
                This is Another Icon <FaAdjust />
              </Col>
              <Col md={12}>
                This is Another Icon <FaArchive />
              </Col>
              <Col md={12}>
                This is Another Icon <FaCodiepie />
              </Col>
              <Col md={12}>
                Checkout Official Docs{" "}
                <a href="http://react-icons.github.io/react-icons/fa.html">
                  here
                </a>
                .
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Iconsexample;
