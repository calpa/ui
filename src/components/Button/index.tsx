import { FC } from "react";
import { Button } from "@mui/material";
import { CustomButtonProps } from "./button";

const CustomButton: FC<CustomButtonProps> = (props) => {
  return <Button {...props} />;
};

CustomButton.defaultProps = {
  variant: "contained",
  color: "primary",
  onClick: undefined,
};

export default CustomButton;
