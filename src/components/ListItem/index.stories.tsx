import React from "react";

import ListItem from ".";

export default {
  title: "Components/ListItem",
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 1,
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  url: "?path=/story/components-listitem--default",
};
