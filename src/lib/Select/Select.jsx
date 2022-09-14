import React,{ useState } from "react";
import { ReactComponent as Arrow } from "./caret-down-solid.svg";

import "./Select.css";

const Select = ({ data, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleOptionClicked = (e) => {
    setSelectedItem(e.target.innerText);
    handleSelect(e.target.innerText)
    setIsOpen(false)
  };

  console.log(isOpen);

  return (
    <div className="Select">
      <div className="dropdown"  >
        <button className={"dropdown__button"} data-bs-toggle="dropdown" aria-expanded={isOpen?"true":"false"} data-testid="button" onClick={() => setIsOpen(!isOpen)} onBlur={()=> setIsOpen(false)} >
          <p className="selected-item" data-testid="button-text">{selectedItem}</p>
          <span className="icon-wrapper">
            <Arrow className="arrow-icon"/>
          </span>
        </button>
        <ul className={isOpen ? "dropdown__menu" : "dropdown__menu hide"} data-testid="dropdown">
          {data.map((item, key = 0) => {
            key++;
            return (
              <li
                className="dropdown__menu__item"
                key={key}
                onClick={handleOptionClicked}
                data-testid="item"
              >
                <p className="dropdown__menu__item__content" data-testid = "content" >{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


export default Select;
