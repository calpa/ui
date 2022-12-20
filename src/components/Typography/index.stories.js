import { Typography } from "@mui/material";

export default {
  title: "Components/Typography",
  component: Typography,
};

const Template = (args) => {
  return (
    <div>
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="h4">H4</Typography>
      <Typography variant="h5">H5</Typography>
    </div>
  );
};

export const Headings = Template.bind({});

const ParagraphTemplate = (args) => {
  return <Typography>{args.children}</Typography>;
};

export const Paragraph = ParagraphTemplate.bind({});

Paragraph.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
