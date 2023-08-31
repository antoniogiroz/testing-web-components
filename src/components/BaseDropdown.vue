<script setup lang="ts">
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown'
import '@shoelace-style/shoelace/dist/components/button/button'
import '@shoelace-style/shoelace/dist/components/menu/menu'
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item'
import type { MenuSelectEventDetail } from '@shoelace-style/shoelace/dist/components/menu/menu.component.js'

export interface DropdownItem {
  value: string
  label: string
}

const props = defineProps<{
  label: string
  items: DropdownItem[]
}>()

const emit = defineEmits<{
  'select': [value: string]
}>()

function selectItem(event: CustomEvent<MenuSelectEventDetail>) {
  emit('select', event.detail.item.value)
}
</script>

<template>
  <sl-dropdown>
    <sl-button slot="trigger" caret>
      {{ props.label }}
    </sl-button>
    <sl-menu @sl-select="selectItem">
      <sl-menu-item v-for="item in items" :key="item.value" :value="item.value">
        {{ item.label }}
      </sl-menu-item>
    </sl-menu>
  </sl-dropdown>
</template>
