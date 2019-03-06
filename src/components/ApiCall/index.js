// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { itemsFetchData } from "../../redux/actions/itemsMain";
import { ButtonToolbar, Button } from "react-bootstrap";
import {
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Panel
} from "react-bootstrap";
type Props = {
  fetchData: () => {},
  items: [],
  hasError: boolean,
  isLoading: boolean
};
type State = {};
class Apicall extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  getDataFromApi() {
    this.props.fetchData(
      "https://086966bf-77ff-457d-8f18-2c9f784b4710.mock.pstmn.io/api/v1/build?buildId=1,2&status=completed,passed&username=sawang,nikhily&date=2018-09-09&limit=50&offset=0&excludeTest=true"
    );
  }

  render() {
    let themeClass = null;
    if (this.props.themeClass) {
      themeClass = this.props.themeClass;
    }

    if (this.props.hasError) {
      return (
        <div>
          <p>Sorry! There was an error loading the items</p>
          <Button bsStyle="danger" onClick={this.getDataFromApi}>
            Retry
          </Button>
        </div>
      );
    }

    if (this.props.isLoading) {
      return (
        <div>
          <p>Loading ...</p>
          <Button bsStyle="warning" onClick={this.getDataFromApi}>
            Re-Request
          </Button>
        </div>
      );
    }
    //console.log(process.env);
    return (
      <div>
        <Panel className={styles.panelClass}>
          <h2 className={themeClass ? themeClass : null}>
            API Calls with Redux, Axios
          </h2>

          <ButtonToolbar>
            <Button bsStyle="success" onClick={this.getDataFromApi}>
              Fetch Data From Sample API
            </Button>
          </ButtonToolbar>
          <Panel.Body>
            <ListGroup>
              {this.props.items.builds
                ? this.props.items.builds.map(item => (
                    <ListGroupItem>
                      <Row key={item.id}>
                        <Col md={4} key={item.id + "1"}>
                          {item.name}
                        </Col>
                        <Col md={4} key={item.id + "2"}>
                          {item.date}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))
                : "Sorry!!No Data Here."}
            </ListGroup>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apicall);
