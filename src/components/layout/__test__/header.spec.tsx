import { render, screen } from '@testing-library/react'
import Header from '../header'

describe('Header', () => {
  it('should render the header title', () => {
    render(<Header />)
    const headerTitle = screen.getByText('Showerthoughts')
    expect(headerTitle).toBeInTheDocument()
  })

  it('should render the navigation links', () => {
    render(<Header />)
    const homeLink = screen.getByText('Home')
    const blogLink = screen.getByText('Blog')
    const aboutLink = screen.getByText('About')
    const contactLink = screen.getByText('Contact')

    expect(homeLink).toBeInTheDocument()
    expect(blogLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })
})
