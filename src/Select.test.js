import Select from "./lib/Select/Select";
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { act } from "react-test-renderer";



describe("My select component", () => {
    it("should display the first element of the array in the button by default", () => {
        const array = ["apple", "banana", "strawberry"];

        render(<Select data={array} />)
        const buttonText = screen.getByTestId("button-text")
        expect(buttonText.innerHTML).toEqual("apple");

        
    })
    describe("When I click on the button,", () => {
        it("should display the dropdown menu", () => {
            const array = ["apple", "banana", "strawberry"];
            const handleClick = jest.fn();
            window.HTMLElement.prototype.scrollIntoView = function() {};

            render(<Select data={array} />)

            const button = screen.getByTestId("button");
            const dropdown = screen.getByTestId("dropdown");
    
            expect(dropdown.classList).toContain("hide")
            expect(dropdown).not.toBeVisible()
            expect(screen.getByText("banana")).not.toBeVisible()
            fireEvent.click(button, handleClick)
            expect(dropdown.classList).not.toContain("hide")
            expect(dropdown).toBeVisible()
            expect(screen.getByText("banana")).toBeVisible()
        })

    })
    describe("When I select an option,", () => {
        it("should display the option is the button", async () => {
            const array = ["apple", "banana", "strawberry"];
            const handleClick = jest.fn();
            window.HTMLElement.prototype.scrollIntoView = function() {};
            const handleSelect = jest.fn()

            render(<Select
                data={array} 
                value={array[0]}
                handleSelect={(newValue) => handleSelect(newValue)} 
            />)

            const buttonText = screen.getByTestId("button-text")
            expect(buttonText.innerHTML).toEqual("apple");

            const button = screen.getByTestId("button");
            const dropdown = screen.getByTestId("dropdown");

    
            fireEvent.click(button, handleClick)

            expect(dropdown.classList).not.toContain("hide")
            expect(dropdown).toBeVisible()
            expect(screen.getByText("banana")).toBeVisible()

            const bananaOption = screen.getByText("banana");
           
            act(()=> { 
                bananaOption.dispatchEvent(new MouseEvent("click", {bubbles: true}))
            })
            expect(handleSelect).toBeCalled()
            expect(bananaOption.innerHTML).toBe("banana")


            expect(dropdown).not.toBeVisible()

            expect(buttonText.innerHTML).toBe("banana")

        })

    })

})