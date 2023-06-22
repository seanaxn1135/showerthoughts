import { render, screen } from '@testing-library/react'
import Footer from './../footer'

describe('Footer', () => {
  it('should render the footer text', () => {
    const currentYear = new Date().getFullYear()
    render(<Footer />)
    const footerText = screen.getByText(`© ${currentYear} Showerthoughts`)
    expect(footerText).toBeInTheDocument()
  })
})
