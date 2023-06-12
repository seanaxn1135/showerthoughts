import { render, screen } from '@testing-library/react'
import Home from '../page'

test('renders Home on the screen', () => {
  render(<Home />)
  const homeElement = screen.getByText('Home')
  expect(homeElement).toBeInTheDocument()
})
