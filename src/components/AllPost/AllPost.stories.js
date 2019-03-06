import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Allpost from ".";
import configureStore from "../../redux/configureStore";
const store = configureStore();
storiesOf("Allpost", module).add("default", () => <Allpost store={store} />);
