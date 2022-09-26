"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _caretDownSolid = require("./caret-down-solid.svg");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Select.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Select React Componenent
 * @param {array} data - data to display in the dropdown 
 * @param {function} handleSelect - it will pass the modification to the parent component
 *  when the user selects an option.
 * @returns Select React Component
 */
const Select = _ref => {
  let {
    data,
    handleSelect
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [selectedItem, setSelectedItem] = (0, _react.useState)(data[0]);
  /**
   * When an option is selected, 
   * it will update the the button's text to the selected option's text.
   * @param e - event when clicked on the option
   * 
   *  */

  const handleOptionClicked = e => {
    setSelectedItem(e.target.innerHTML);
    handleSelect(e.target.innerHTML);
    setIsOpen(false);
  };
  /**
   * When the user clicks on the button,
   *  it will open the dropdown menu.
   * @param e - event when clicked on the button
   */


  const handleClick = e => {
    setIsOpen(!isOpen);
    const current = e.target;
    current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Select"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown__button",
    "data-bs-toggle": "dropdown",
    "data-testid": "button",
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "selected-item",
    "data-testid": "button-text",
    value: selectedItem
  }, selectedItem), /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_caretDownSolid.ReactComponent, {
    className: "arrow-icon"
  }))), /*#__PURE__*/_react.default.createElement("ul", {
    className: isOpen ? "dropdown__menu" : "dropdown__menu hide",
    "data-testid": "dropdown",
    onMouseLeave: () => setIsOpen(false),
    hidden: !isOpen
  }, data.map(function (item) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    key++;
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "dropdown__menu__item",
      key: key,
      onClick: handleOptionClicked,
      "data-testid": "item",
      value: item
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "dropdown__menu__item__content",
      "data-testid": "content",
      value: item
    }, item));
  }))));
};

Select.propTypes = {
  data: _propTypes.default.array,
  handleSelect: _propTypes.default.func
};
var _default = Select;
exports.default = _default;