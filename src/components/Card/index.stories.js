import Card from ".";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  date: "2022-12-01",
};
