import Select from "./Select";
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'



describe("My select component", () => {
    it("should display the array in the menu", () => {
        const array = ["apple", "banana", "strawberry"];
        const handleClick = jest.fn();

        render(<Select data={array} />)
        const buttonText = screen.getByTestId("button-text")
        console.log(buttonText.innerHTML);
        expect(buttonText.innerHTML).toEqual("apple");

        
        const button = screen.getByTestId("button");
        const dropdown = screen.getByTestId("dropdown");

        expect(dropdown.classList).toContain("hide")
        button.click();
        expect(dropdown).toBeTruthy()
        expect(dropdown.classList).not.toContain("hide")

        // expect(dropdown).toContain("banana")


        
//         render( array.map((item, key = 0) => {
//             key++;
//             return (
//               <li
//                 className="dropdown__menu__item"
//                 key={key}
//                 onClick={handleClick}
//                 item={item}
//               >
//                 <p className="dropdown__menu__item__content" data-testid = "content" >{item}</p>
//               </li>)}))

// // const items = screen.getAllByTestId("item");



//         // items.map(item => {
//         //    item.click()
//         // })
        

//         expect(handleClick).toBeCalled()

//         expect(buttonText.innerHTML).toEqual("banana");

        // expect(screen.getByText("banana").).toBeInTheDocument();
        // const items= screen.getAllByTestId()
        
        



    })
})