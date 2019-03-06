import React from "react";
import renderer from "react-test-renderer";
import Editcomponent from ".";
import configureStore from "../../redux/configureStore";

const store = configureStore();
it("Editcomponent: default", () => {
  const component = renderer.create(<Editcomponent store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
