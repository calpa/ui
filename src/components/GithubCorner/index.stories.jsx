import React from "react";

import GithubCorner from ".";

export default {
  title: "Components/GithubCorner",
  component: GithubCorner,
};

const Template = (args) => <GithubCorner {...args} />;

export const Default = Template.bind({});

Default.args = {
  url: "https://calpa.me/",
  target: "_blank",
};
