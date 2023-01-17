import Tag from ".";

export default {
  title: "Components/Tag",
  component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: "JavaScript",
  children: "JavaScript",
  className: "tag",
};
