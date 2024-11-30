<script setup lang="ts">
import { Download, Heart } from 'lucide-vue-next'

defineProps({
  data: Array<{ id: number; text: string }>
})
</script>

<template>
  <div class="p-11 flex flex-col gap-5">
    <div
      class="w-full bg-gradient-to-b from-sky-700 to-sky-400 py-4 px-7 rounded-md flex justify-between cursor-pointer"
      v-for="item of data"
      :key="item.id"
    >
      <p class="text-xl text-white font-medium">{{ item.text }}</p>
      <div class="flex gap-4">
        <Heart color="white" />
        <Download color="white" />
      </div>
    </div>
  </div>
</template>
