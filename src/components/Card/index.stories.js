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
  showTagsComponent: true,
  showDateComponent: true,
};

export const WithoutDate = Template.bind({});
WithoutDate.args = {
  title: "Title",
  description: "Description",
  date: "",
  showDateComponent: false,
  tags: ["JavaScript", "React.js", "Node.js"],
};

export const WithoutTags = Template.bind({});
WithoutTags.args = {
  title: "Title",
  description: "Description",
  date: "2022-12-01",
  showTagsComponent: false,
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

export const WithImage = Template.bind({});
WithImage.args = {
  title:
    "Stronger Type Safety and Improved Collaboration with TypeScript in Financial Services",
  description: "Description",
  date: "2022-12-01",
  tags: ["JavaScript", "Typescript"],
  imageProps: {
    image: "https://i.imgur.com/MBmjw2h.png",
    sx: {
      width: `100%`,
      height: `300px`,
    },
  },
};
