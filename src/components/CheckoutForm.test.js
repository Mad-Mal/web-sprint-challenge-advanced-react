import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {

    render(<CheckoutForm/>)

    const header = screen.getByText('Checkout Form')

    expect(header).toBeInTheDocument()

});

test("shows success message on submit with form details", () => {

    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText('First Name:')
    userEvent.type(firstName, 'Mallory')

    const lastName = screen.getByLabelText('Last Name:')
    userEvent.type(lastName, 'Clouse')

    const address = screen.getByLabelText('Address:')
    userEvent.type(address, '73 Warwick Rd')

    const city = screen.getByLabelText('City:')
    userEvent.type(city, 'Little Rock')

    const state = screen.getByLabelText('State:')
    userEvent.type(state, 'Arkansas')

    const zipcode = screen.getByLabelText('Zip:')
    userEvent.type(zipcode, '72205')

    const checkout = screen.getByRole('button')
    userEvent.click(checkout)

    const confirmation = screen.getByTestId('successMessage')
    expect(confirmation).toBeInTheDocument()
    
});
