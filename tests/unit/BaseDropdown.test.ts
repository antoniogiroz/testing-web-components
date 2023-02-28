import { describe, expect, test, vi } from 'vitest'
import BaseDropdown from '../../src/components/BaseDropdown.vue'
import { render, screen } from '.'

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserver)

describe('BaseDropdown', () => {
  test('pass', async () => {
    const props = {
      label: 'Menu',
      items: [
        { label: 'Item 1', value: 'item1' },
        { label: 'Item 2', value: 'item2' },
      ],
    }

    const { user } = render(BaseDropdown, {
      props,
    })

    expect(screen.getByText(props.label)).toBeInTheDocument()

    const menuButton = await screen.findByText(/menu/i)

    user.click(menuButton)
  })

  test('fails', async () => {
    const props = {
      label: 'Menu',
      items: [
        { label: 'Item 1', value: 'item1' },
        { label: 'Item 2', value: 'item2' },
      ],
    }

    const { user } = render(BaseDropdown, {
      props,
    })

    expect(screen.getByText(props.label)).toBeInTheDocument()

    const menuButton = await screen.findByRole('button', {
      name: /menu/i,
    }) // fails here

    expect(menuButton).toHaveAttribute('aria-expanded', 'false') // fails here

    await user.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true') // fails here

    const menuItems = await screen.findAllByRole('menuitem')
    await expect(menuItems).toHaveLength(props.items.length)
  })
})
