import React from "react";
import renderer from "react-test-renderer";
import Crud from ".";
import configureStore from "../../redux/configureStore";
import { connect } from "redux";
import PostForm from "../PostForm";
const store = configureStore();
it("Crud: default", () => {
  // const component = renderer.create(<Crud store={store} />);
  // const tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
