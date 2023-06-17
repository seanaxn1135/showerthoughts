import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home component', () => {
  test('renders the image', () => {
    render(<Home />)
    const imageElement = screen.getByAltText('Coding Developer')
    expect(imageElement).toBeInTheDocument()
  })
})
