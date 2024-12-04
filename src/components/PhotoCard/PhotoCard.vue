<script setup>
import { computed } from 'vue'
const props = defineProps({
  url: {
    type: [Object, Array], // Adjust type based on `res`'s actual structure
    required: true,
  },
})

// If `url` is expected to be an object
const data = computed(() => props.url || {})
</script>

<template>
  <div>
    <p v-if="!data || Object.keys(data).length === 0">No data available</p>
    <div v-else>
      <!-- Replace this logic with your actual rendering -->
      <h1>{{ data.id }}</h1> <!-- Add null checks if `id` might not exist -->
      <p>{{ data.name }}</p>
    </div>
  </div>
</template>
