import { render, screen } from '@testing-library/react'
import Tagline from '../tagline'

describe('Tagline', () => {
  it('should render the tagline text', () => {
    const text = 'Hello World'
    render(<Tagline text={text} />)

    const taglineElement = screen.getByText(text)
    expect(taglineElement).toBeInTheDocument()
  })
})
