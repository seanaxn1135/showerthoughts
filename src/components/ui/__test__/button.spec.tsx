import { render, screen } from '@testing-library/react'
import Button from '../button'

describe('Button', () => {
  it('renders button text correctly', () => {
    render(<Button href="/about">About Me</Button>)
    const button = screen.getByRole('link', { name: 'About Me' })
    expect(button).toBeInTheDocument()
  })

  it('renders the correct href', () => {
    const href = '/about'
    render(<Button href={href}>About</Button>)

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', href)
  })

  it('applies custom class name correctly', () => {
    const customClassName = 'custom-class'
    render(
      <Button href="/about" className={customClassName}>
        About Me
      </Button>
    )
    const button = screen.getByRole('link', { name: 'About Me' })
    expect(button).toHaveClass(customClassName)
  })
})
