import { render, screen } from "@testing-library/react"
import Scoops from "."
import userEvent from "@testing-library/user-event";


test("render cards for the data received from api", async () => {

    render(<Scoops />);

    // get rendered images
    const images = await screen.findAllByAltText("icecreams");

    // check if numbers of cards(images) more than 1 or equal
    expect(images.length).toBeGreaterThanOrEqual(1)
})

test("Adding and resetting flavors effects total price", async () => {

    //set up userEvent
    const user = userEvent.setup();

    //render
    render(<Scoops />)

    //retrive all add and rest buttons
    const addButtons = await screen.findAllByRole("button", { name: "Add" })
    const delButtons = await screen.findAllByRole("button", { name: "Reset" })

    //get total price element
    const total = screen.getByTestId("total")

    //total price is 0 
    expect(total.textContent).toBe("0")

    //click add button
    await user.click(addButtons[0])

    //check if total pris is 5€
    expect(total.textContent).toBe("5")

    // double click any add buttun
    await user.dblClick(addButtons[1])

    // check if total price is 15€
    expect(total.textContent).toBe("15")

    //remove firs added item
    await user.click(delButtons[0])

    // check if total pris is 10
    expect(total.textContent).toBe("10")

    //delete scond item
    await user.click(delButtons[1])

    // check if total price is 0
    expect(total.textContent).toBe("0")


})