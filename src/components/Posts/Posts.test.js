import React from "react";
import renderer from "react-test-renderer";
import Posts from ".";
import configureStore from "../../redux/configureStore";
const store = configureStore();

it("Posts: default", () => {
  const component = renderer.create(<Posts store={store} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
