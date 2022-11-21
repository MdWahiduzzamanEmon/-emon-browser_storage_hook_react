"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.json.stringify.js");
var _react = require("react");
const useSessionStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = (0, _react.useState)(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      } else {
        sessionStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      // console.log(error);
      return defaultValue;
    }
  });
  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // console.log(error);
    }
  };
  return [storedValue, setValue];
};
var _default = useSessionStorage;
exports.default = _default;