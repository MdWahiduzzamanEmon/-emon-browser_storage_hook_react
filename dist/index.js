"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useLocalStorage", {
  enumerable: true,
  get: function get() {
    return _LocalStorage.default;
  }
});
Object.defineProperty(exports, "useSessionStorage", {
  enumerable: true,
  get: function get() {
    return _SessionStorage.default;
  }
});
var _SessionStorage = _interopRequireDefault(require("./components/SessionStorage/SessionStorage"));
var _LocalStorage = _interopRequireDefault(require("./components/LocalStorage/LocalStorage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }