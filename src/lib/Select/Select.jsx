import React,{ useState } from "react";
import { ReactComponent as Arrow } from "./caret-down-solid.svg";
import PropTypes from 'prop-types'; 

import "./Select.css";

/**
 * Select React Componenent
 * @param {array} data - data to display in the dropdown 
 * @param {function} handleSelect - it will pass the modification to the parent component
 *  when the user selects an option.
 * @returns Select React Component
 */
const Select = ({ data, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  /**
   * When an option is selected, 
   * it will update the the button's text to the selected option's text.
   * @param e - event when clicked on the option
   * 
   *  */
  const handleOptionClicked = (e) => {
    setSelectedItem(e.target.innerHTML);
    handleSelect(e.target.innerHTML)
    setIsOpen(false)
  };

  /**
   * When the user clicks on the button,
   *  it will open the dropdown menu.
   * @param e - event when clicked on the button
   */
  const handleClick = (e) => {
    setIsOpen(!isOpen)
    const current = e.target;
    current.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
  }

  return (
    <div className="Select"  >
      <div className="dropdown" >
        <div className={"dropdown__button"} data-bs-toggle="dropdown" data-testid="button" onClick={handleClick}  >
          <p className="selected-item" data-testid="button-text" value={selectedItem}>{selectedItem}</p>
          <span className="icon-wrapper">
            <Arrow className="arrow-icon"/>
          </span>
        </div>
        <ul className={isOpen ? "dropdown__menu" : "dropdown__menu hide"} data-testid="dropdown" onMouseLeave={()=> setIsOpen(false)} hidden={!isOpen} >
          {data.map((item, key = 0) => {
            key++;
            return (
              <li
                className="dropdown__menu__item"
                key={key}
                onClick={handleOptionClicked}
                data-testid="item"
                value={item}
              >
                <p className="dropdown__menu__item__content" data-testid = "content" value={item}>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Select.propTypes = {
  data: PropTypes.array,
  handleSelect: PropTypes.func
}


export default Select;
