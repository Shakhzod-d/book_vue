<script setup lang="ts">
import { Forward, Heart } from 'lucide-vue-next'
const data = [
  { id: 1, text: 'Abusaid Kuchimov (Bahor chaqmoqlari yoki mangu qoida)' },
  { id: 2, text: "Shayx Abdulaziz Mansur (Sa'dulla Hakim xotirasi)" },
  { id: 3, text: "Halim Sayid ('Ma'rifat' ga samimiyat keltirgan rahbar)" }
]
</script>

<template>
  <div class="p-11 flex flex-col gap-5 max-m:p-8 max-s:p-4">
    <div
      class="w-full bg-blue-500 py-4 px-7 rounded-md flex justify-between cursor-pointer"
      v-for="item of data"
      :key="item.id"
    >
      <p class="text-xl text-white font-medium max-sm:text-base max-m:text-xs max-s:text-[10px]">
        {{ item.text }}
      </p>
      <div class="flex gap-4">
        <Heart color="white" />
        <Forward color="white" />
      </div>
    </div>
  </div>
</template>
