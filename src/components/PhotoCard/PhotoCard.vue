<script setup>
defineProps({
  url: String // Expecting a string URL
})
</script>

<template>
  <div
    class="w-[350px] h-[350px] shadow-lg rounded-md hover:translate-y-[-6px] transition-all hover:shadow-2xl"
  >
    <img
      :src="url"
      alt="Image not found"
      class="w-full h-full object-cover rounded-md border-4 border-stone-500"
    />
  </div>
</template>
