<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import BaseDropdown from './components/BaseDropdown.vue'

const items = ref([
  { label: 'Item 1', value: 'item1' },
  { label: 'Item 2', value: 'item2' },
])
</script>

<template>
  <RouterView />

  <BaseDropdown label="Menu" :items="items" />
</template>
