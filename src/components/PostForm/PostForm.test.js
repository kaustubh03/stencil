import React from "react";
import renderer from "react-test-renderer";
import Postform from ".";
import configureStore from "../../redux/configureStore";
const store = configureStore();

it("Postform: default", () => {
  const component = renderer.create(<Postform store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
