"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _LockOutlined = _interopRequireDefault(require("@mui/icons-material/LockOutlined"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Link = _interopRequireDefault(require("@mui/material/Link"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SignIn(props) {
  const {
    handleSubmit
  } = props;
  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(event);
    const data = new FormData(event.currentTarget);
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, {
      sx: {
        m: 1,
        bgcolor: "primary.main"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LockOutlined.default, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      component: "h1",
      variant: "h5",
      children: "Sign in"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      component: "form",
      onSubmit: onSubmit,
      noValidate: true,
      sx: {
        mt: 1
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        margin: "normal",
        required: true,
        fullWidth: true,
        id: "email",
        label: "Email Address",
        name: "email",
        autoComplete: "email",
        inputProps: {
          pattern: "[\\w-]+@[\\w-]+\\.[a-z]{2,}",
          inputMode: "email",
          "data-testid": "email"
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
        margin: "normal",
        required: true,
        fullWidth: true,
        name: "password",
        label: "Password",
        type: "password",
        id: "password",
        autoComplete: "current-password",
        inputProps: {
          "data-testid": "password"
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlLabel.default, {
        control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
          value: "remember",
          color: "primary"
        }),
        label: "Remember me"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        sx: {
          mt: 3,
          mb: 2
        },
        children: "Sign In"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
        container: true,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          xs: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
            href: "#",
            variant: "body2",
            children: "Forgot password?"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
            href: "#",
            variant: "body2",
            children: "Don't have an account? Sign Up"
          })
        })]
      })]
    })]
  });
}
var _default = SignIn;
exports.default = _default;
SignIn.propTypes = {
  handleSubmit: _propTypes.default.func
};
SignIn.defaultProps = {
  handleSubmit: () => {}
};