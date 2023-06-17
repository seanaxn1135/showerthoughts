import { render } from '@testing-library/react'
import Navbar from '../navbar'

describe('Navbar', () => {
  it('renders correct navigation items', () => {
    const navItems = [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Blog',
        href: '/blog',
      },
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Contact',
        href: '/contact',
      },
    ]

    const { getByText } = render(<Navbar />)

    // Assert that each navigation item is rendered correctly
    navItems.forEach((item) => {
      const linkElement = getByText(item.name)
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', item.href)
    })
  })
})
