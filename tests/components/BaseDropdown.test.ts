import { expect, test } from '@playwright/experimental-ct-vue'
import BaseDropdown from '../../src/components/BaseDropdown.vue'

test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount }) => {
  const component = await mount(BaseDropdown, {
    props: {
      label: 'Menu',
      items: [
        { label: 'Item 1', value: 'item1' },
        { label: 'Item 2', value: 'item2' },
      ],
    },
  })

  await expect(component).toContainText('Menu')
  await component.click()
  await expect(component.getByText('Item 1')).toBeVisible()
})
