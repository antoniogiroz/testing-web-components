<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import BaseDropdown from './components/BaseDropdown.vue'

const selectedItem = ref('')

const items = ref([
  { label: 'Item 1', value: 'item1' },
  { label: 'Item 2', value: 'item2' },
])

function handleSelect(value: string) {
  console.log(value)
}
</script>

<template>
  <RouterView />

  <BaseDropdown v-model="selectedItem" label="Menu" :items="items" @select="handleSelect" />
</template>

<style src="./assets/main.css"></style>
