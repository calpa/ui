import React from "react";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Text",
  variant: "contained",
};

export const Outlined = Template.bind({});

Outlined.args = {
  children: "Text",
  variant: "outlined",
};

export const AllColors = (args) => {
  return (
    <div>
      <Button {...args} variant="contained" color="primary">
        Primary
      </Button>
      <Button {...args} variant="contained" color="secondary">
        Secondary
      </Button>
      <Button {...args} variant="contained" color="error">
        Error
      </Button>
      <Button {...args} variant="contained" color="info">
        Info
      </Button>
      <Button {...args} variant="contained" color="success">
        Success
      </Button>
      <Button {...args} variant="contained" color="warning">
        Warning
      </Button>
    </div>
  );
};

AllColors.args = {
  children: "Text",
};
