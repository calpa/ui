import React from "react";

import SignIn from ".";

export default {
  title: "Components/SignIn",
  component: SignIn,
};

const Template = (args) => <SignIn {...args} />;

export const Default = Template.bind({});
Default.args = {
  // handleSubmit: () => { },
  handleSubmit: (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  },
};
