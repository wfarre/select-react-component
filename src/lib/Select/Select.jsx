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

  const handleClick = (e) => {
    setIsOpen(!isOpen)
    const current = e.target;
    current.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
  }

  return (
    <div className="Select"  >
      <div className="dropdown" >
        <div className={"dropdown__button"} data-bs-toggle="dropdown" aria-expanded={isOpen?"true":"false"} data-testid="button"   onClick={handleClick}  >
          <p className="selected-item" data-testid="button-text">{selectedItem}</p>
          <span className="icon-wrapper">
            <Arrow className="arrow-icon"/>
          </span>
        </div>
        <ul className={isOpen ? "dropdown__menu" : "dropdown__menu hide"} data-testid="dropdown" onMouseLeave={()=> setIsOpen(false)} >
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
