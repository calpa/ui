import React from "react";
import Date from ".";

export default {
  title: "Components/Date",
  component: Date,
};

const Template = (args) => <Date {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: "2022-12-01",
};
