"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _caretDownSolid = require("./caret-down-solid.svg");

require("./Select.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Select = _ref => {
  let {
    data
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [selectedItem, setSelectedItem] = (0, _react.useState)(data[0]);

  const handleOptionClicked = e => {
    setSelectedItem(e.target.innerHTML);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Select"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown",
    onClick: () => setIsOpen(!isOpen)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isOpen ? "dropdown__button" : "dropdown__button"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-item"
  }, selectedItem), /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_caretDownSolid.ReactComponent, {
    className: "arrow-icon"
  }))), /*#__PURE__*/_react.default.createElement("ul", {
    className: isOpen ? "dropdown__menu" : "dropdown__menu hide"
  }, data.map(function (item) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    key++;
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "dropdown__menu__item",
      key: key,
      onClick: handleOptionClicked
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "dropdown__menu__item__content"
    }, item));
  }))));
};

var _default = Select;
exports.default = _default;