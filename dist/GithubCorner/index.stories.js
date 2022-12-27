"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "Components/GithubCorner",
  component: _.default
};
exports.default = _default;
const Template = args => /*#__PURE__*/React.createElement(_.default, args);
const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  url: "https://calpa.me/",
  target: "_blank"
};