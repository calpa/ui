import React from "react";
import MainImage from ".";

export default {
  title: "Components/MainImage",
  component: MainImage,
};

const Template = (args) => <MainImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundImage: `https://images.unsplash.com/photo-1613487957484-32c977a8bd62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&h=640&q=80`,
  name: `秋葉原`,
};
