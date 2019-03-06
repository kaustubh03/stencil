import React from "react";
import renderer from "react-test-renderer";
import Allpost from ".";
import configureStore from "../../redux/configureStore";
const store = configureStore();
it("Allpost: default", () => {
  const component = renderer.create(<Allpost store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
