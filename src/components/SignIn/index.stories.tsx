import { expect } from "@storybook/jest";

import { userEvent, waitFor, within } from "@storybook/testing-library";

import SignIn from ".";

export default {
  title: "Components/SignIn",
  component: SignIn,
  argTypes: {
    handleSubmit: {
      action: true,
    },
  },
};

const Template = (args) => <SignIn {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Filled = (args) => <SignIn {...args} />;

Filled.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId("email"), "hi@example.com");
  await userEvent.type(canvas.getByTestId("password"), "supersecret");
  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.handleSubmit).toHaveBeenCalled());
};
