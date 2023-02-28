import { expect, test } from '@playwright/test'

test.describe('App', () => {
  test('should render de menu', async ({ page }) => {
    await page.goto('/')

    const menuButton = await page.getByRole('button', { name: /menu/i })
    const menuItems = await page.getByRole('menuitem')
    const menuItem1 = await menuItems.filter({ hasText: 'Item 1' })

    await expect(await menuItems.count()).toBe(0)
    await expect(menuItem1).toBeHidden()

    await menuButton.click()

    await expect(await menuItems.count()).toBe(2)
    await expect(menuItem1).toBeVisible()
  })
})
