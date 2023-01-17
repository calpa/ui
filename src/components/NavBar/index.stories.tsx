import NavBar from ".";

export default {
  title: "Components/NavBar",
  component: NavBar,
  argTypes: {
    onClick: { action: "clicked" },
    handleTitleClick: { action: "clicked" },
  },
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  pages: ["Portfolios", "Articles", "Tags"],
  avatarAlt: "Nyahello",
  title: "BLOG",
  position: "fixed",
  color: "default",
};
