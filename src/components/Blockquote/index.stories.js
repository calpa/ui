import Blockquote from ".";

export default {
  title: "Components/Blockquote",
  component: Blockquote,
};

const Template = (args) => <Blockquote {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
