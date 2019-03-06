import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Apicall from ".";
import configureStore from "../../redux/configureStore";
const store = configureStore();

storiesOf("Apicall", module).add("default", () => <Apicall store={store} />);

storiesOf("Apicall", module).add("Theme", () => (
  <Apicall store={store} themeClass="blue" />
));
