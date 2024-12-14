
import Calculator from "../../components/Calculator";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe('Calculator', () => {
    it('should render the calculator component without errors', () => {
        render(<Calculator />)
        expect(screen.getByText('Sum Calculator')).toBeInTheDocument()
    })

    it('should render the sum based on the input', async () => {
        render(<Calculator />)
        const input = screen.getByRole('textbox')
        const user = userEvent.setup()
        await user.type(input, '1,2,3,120,320')
        const button = screen.getByRole('button', { name: 'Calculate Sum' })
        await user.click(button)
        expect(screen.getByText('446')).toBeInTheDocument()
    })

    it('should render the sum with custom delimiter', async () => {
        render(<Calculator />)
        const input = screen.getByRole('textbox')
        const user = userEvent.setup()
        await user.type(input, '//;\n1;2;3;120;320')
        const button = screen.getByRole('button', { name: 'Calculate Sum' })
        await user.click(button)
        expect(screen.getByText('446')).toBeInTheDocument()
    })

    it('should render the error message when the input is invalid', async () => {
        render(<Calculator />)
        const input = screen.getByRole('textbox')
        const user = userEvent.setup()
        await user.type(input, '1,asd')
        const button = screen.getByRole('button', { name: 'Calculate Sum' })
        await user.click(button)
        expect(screen.getByText('Invalid input')).toBeInTheDocument()
    })

    it('should render the error message when the input is negative', async () => {
        render(<Calculator />)
        const input = screen.getByRole('textbox')
        const user = userEvent.setup()
        await user.type(input, '-1,-2,-3,4,5,6')
        const button = screen.getByRole('button', { name: 'Calculate Sum' })
        await user.click(button)
        expect(screen.getByText('Negative numbers are not allowed -1,-2,-3')).toBeInTheDocument()
    })

    it('should clear the error message when the calculate button is clicked with valid input', async () => {
        render(<Calculator />)
        const input = screen.getByRole('textbox')
        const user = userEvent.setup()
        await user.type(input, '-1,-2,-3,4,5,6')
        const button = screen.getByRole('button', { name: 'Calculate Sum' })
        await user.click(button)
        expect(screen.queryByText('Negative numbers are not allowed -1,-2,-3')).toBeInTheDocument()
        await user.clear(input)
        await user.type(input, '1,2,3,4,5,6')
        await user.click(button)
        expect(screen.queryByText('Negative numbers are not allowed -1,-2,-3')).not.toBeInTheDocument()
    })
})