import ErrorMessage from "../../components/ErrorMessage"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

describe('ErrorMessage', () => {
    it('should render the error message', () => {
        render(<ErrorMessage error="Error" onClose={() => {}} />)
        expect(screen.getByText('Error')).toBeInTheDocument()
    })

    it('should call the onClose function when the close button is clicked', async () => {
        const onClose = vi.fn()
        render(<ErrorMessage error="Error" onClose={onClose} />)
        const user = userEvent.setup()
        const closeButton = screen.getByRole('button')
        await user.click(closeButton)
        expect(onClose).toHaveBeenCalledTimes(1)
    })
})