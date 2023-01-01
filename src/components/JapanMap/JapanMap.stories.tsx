import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import JapanMap from ".";

export default {
  title: "Components/JapanMap",
  component: JapanMap,
} as ComponentMeta<typeof JapanMap>;

const Template = (args) => <JapanMap {...args} />;

export const Default: ComponentStory<typeof JapanMap> = Template.bind({});
Default.args = {
  type: "dense",
  regionality: true,
  uniformly: false,
  stroked: false,
};
