import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = (props) => {
  return <Button {...props} />;
};

export default CustomButton;

CustomButton.defaultProps = {
  variant: "contained",
  color: "primary",
  onClick: undefined,
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
  onClick: PropTypes.func,
};
