import React,{ useState } from "react";
import { ReactComponent as Arrow } from "./caret-down-solid.svg";

import "./Select.css";

const Select = ({ data, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleOptionClicked = (e) => {
    setSelectedItem(e.target.innerHTML);
    handleSelect(e.target.innerHTML)
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
        <div className={"dropdown__button"} data-bs-toggle="dropdown" aria-expanded={isOpen} data-testid="button" onClick={handleClick}  >
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


export default Select;
