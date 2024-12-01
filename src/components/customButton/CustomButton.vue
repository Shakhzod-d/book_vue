<script setup lang="ts">
defineProps({
  text: String
})
</script>

<template>
  <button
    class="hover:bg-cyan-400 hover:border-transparent border duration-500 border-stone-400 border-solid p-3 rounded"
  >
    {{ text }}
  </button>
</template>
