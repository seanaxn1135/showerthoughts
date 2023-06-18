import Logo from '../logo'
import { render, screen } from '@testing-library/react'

describe('Logo', () => {
  it('should render logo and website title', () => {
    render(<Logo />)
    const imageElement = screen.getByAltText('Shower Thoughts Logo')
    expect(imageElement).toBeInTheDocument()
    const headerTitle = screen.getByText('Showerthoughts')
    expect(headerTitle).toBeInTheDocument()
  })
})
