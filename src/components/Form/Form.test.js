
import { render, screen, fireEvent } from "@testing-library/react"
import Form from "."


test("Button activation based on approval of the terms", () => {

    // 1-) render the element
    render(<Form />);

    // 2-) get the elements
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    // 3-) button is disabled
    expect(button).toBeDisabled();

    // 4-) checkbox is unchecked
    expect(checkbox).not.toBeChecked();

    // 5-) checkbox checked
    fireEvent.click(checkbox);

    // 6-)button is active
    expect(button).toBeEnabled();

    // 7-) checkbox unchecked
    fireEvent.click(checkbox);

    // 8-) button is disabled
    expect(button).toBeDisabled();
})

test("Notification appears when hover over the button", 
() => {

    // 1-) render element
    render(<Form />)

    // 2-) get elements
    const button = screen.getByRole('button');
    const checkbox = screen.getByRole("checkbox");
    const alert = screen.getByText(/this is /i);

    // 3-) checkbox checked
    fireEvent.click(checkbox);

    // 4-) there is no notification 
    expect(alert).not.toBeVisible();

    // 5-) hover on button
    fireEvent.mouseEnter(button);

    // 6-) is notification appears ?
    expect(alert).toBeVisible()

    // 7-) unhover button
    fireEvent.mouseLeave(button)

    // 8-) is notification disappears ?
    expect(alert).not.toBeVisible();

})