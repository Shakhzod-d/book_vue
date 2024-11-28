<script setup lang="ts">
import { Download, Heart } from 'lucide-vue-next'
const data = [
  { id: 1, text: 'Kechagi kun (Lermentov sheri tarjimasi)' },
  { id: 2, text: "Kechagi kun (Lermentov sheri tarjimasi)" },
]
</script>

<template>
  <div class="p-11 flex flex-col gap-5">
    <div
      class="w-full bg-blue-500 py-4 px-7 rounded-md flex justify-between cursor-pointer"
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
