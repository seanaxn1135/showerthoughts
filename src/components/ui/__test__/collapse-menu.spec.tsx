import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CollapseMenu from '../collapse-menu'

const menuItems = [
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

describe('CollapseMenu', () => {
  it('should render menu button', () => {
    render(<CollapseMenu menuItems={menuItems} />)
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toBeInTheDocument()
  })

  test('expands and closes menu', async () => {
    render(<CollapseMenu menuItems={menuItems} />)
    const menuButton = screen.getByRole('button', { name: 'Open menu' })

    // Expand the menu
    userEvent.click(menuButton)
    await waitFor(() => {
      menuItems.forEach((menuItem) => {
        const menuLink = screen.getByRole('link', { name: menuItem.name })
        expect(menuLink).toBeInTheDocument()
        expect(menuLink).toHaveAttribute('href', menuItem.href)
      })
    })

    // Close the Menu
    userEvent.click(document.body)
    await waitFor(() => {
      menuItems.forEach((menuItem) => {
        const menuLink = screen.queryByRole('link', { name: menuItem.name })
        expect(menuLink).not.toBeInTheDocument()
      })
    })
  })
})
