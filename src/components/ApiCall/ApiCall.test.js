import React from "react";
import renderer from "react-test-renderer";
import Apicall from ".";
import configureStore from "../../redux/configureStore";
const store = configureStore();

it("Apicall: default", () => {
  const component = renderer.create(<Apicall store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
