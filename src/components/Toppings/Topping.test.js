import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Topping from ".";



test("Effect of removing and adding sauces on the total price",
    async () => {

        const user = userEvent.setup();

        // render element
        render(<Topping />)

        // get total price span
        const total = screen.getByTestId("total")

        // get checkboxes
        const toppings = await screen.findAllByRole("checkbox");

        // total price is 0
        expect(total.textContent).toBe("0")
        // checkboxes are unclicked
        toppings.forEach((i) => expect(i).not.toBeChecked)

        //click one of the checkbox
        await user.click(toppings[0])

        // check if total price is 2€
        expect(total.textContent).toBe("2")

        // click one of the checkbox
        await user.click(toppings[1])

        // click ccheckbox total price is 4€
        expect(total.textContent).toBe("4")

        // remove one of the checked
        await user.click(toppings[1])
        // total price is 2
        expect(total.textContent).toBe("2")
        //remove another checked
        await user.click(toppings[0])
        // total price is 0
        expect(total.textContent).toBe("0")







    })