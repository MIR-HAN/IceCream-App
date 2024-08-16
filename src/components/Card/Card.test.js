
import { render, screen } from "@testing-library/react";
import Card from "."
import userEvent from "@testing-library/user-event";



const item = {
    id:"122",
    name: "Vanilla",
    imagePath: "/images/vanilla.png"
}

test("quantity, title and photo are renders according to the incoming prop",
    () => {

        render(<Card item={item}
            amount={5}
            addToBasket={() => { }}
            clearFromBasket={() => { }} />)


        // call the amount span
        const amount = screen.getByTestId("amount");

        // check if amount span is 5
        expect(amount.textContent).toBe("5");

        //did vanilla text appear on the screen?
        screen.getByText("Vanilla");

        // get image
        const image = screen.getByAltText("icecreams")

        //check src point if match props image src
        expect(image).toHaveAttribute("src")



    }
)



const addMockFn = jest.fn();
const clearMockFn = jest.fn();
test("When buttons are clicked, functions are called with the correct parameters.",


    async () => {
       

        const user = userEvent.setup();

        render(<Card
            item={item}
            amount={0}
            addToBasket={addMockFn}
            clearFromBasket={clearMockFn} />)

        // get buttons 
        const addBtn = screen.getByRole("button", { name: "Add" })
        const resetBtn = screen.getByRole("button", { name: "Reset" })

        // click add button
        await user.click(addBtn)

        // did addTobasket works with proper parameters
        expect(addMockFn).toHaveBeenCalledWith(item)
        // click reset button
await user.click(resetBtn)
        // did addTobasket works with proper parameters
expect(clearMockFn).toHaveBeenCalledWith(item.id)

    }



)
