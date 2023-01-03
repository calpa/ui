import React from "react";

import List from ".";

export default {
  title: "Components/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  listItems: [
    {
      number: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      url: "?path=/story/components-listitem--default",
    },
    {
      number: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      url: "?path=/story/components-listitem--default",
    },
    {
      number: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      url: "?path=/story/components-listitem--default",
    },
    {
      number: 4,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      url: "?path=/story/components-listitem--default",
    },
  ],
  topic: "Recent Posts",
};
