import React from "react";

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
