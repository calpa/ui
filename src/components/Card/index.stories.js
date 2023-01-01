import Card from ".";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  date: "2022-12-01",
  tags: ["JavaScript", "React.js", "Node.js"],
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  title:
    "Building Modern Web Applications with My Favorite Tech Stacks in 2022",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  date: "2022-12-01",
  tags: ["JavaScript", "React.js", "Node.js"],
};