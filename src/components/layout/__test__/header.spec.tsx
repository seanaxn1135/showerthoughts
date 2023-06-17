import { render, screen } from '@testing-library/react'
import Header from '../header'

describe('Header', () => {
  it('should render the header title', () => {
    render(<Header />)
    const headerTitle = screen.getByText('Showerthoughts')
    expect(headerTitle).toBeInTheDocument()
  })
})
