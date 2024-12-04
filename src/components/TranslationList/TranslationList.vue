<script setup>
import { Download, Heart } from 'lucide-vue-next'

defineProps({
  data: Array
})
</script>

<template>
  <div class="p-11 flex flex-col gap-5 max-m:p-7">
    <div
      class="w-full bg-gradient-to-b from-sky-700 to-sky-400 py-4 px-7 rounded-md flex justify-between cursor-pointer max-m:px-4"
      v-for="item of data"
      :key="item.id"
    >
      <p class="text-xl text-white font-medium max-sm:text-lg max-m:text-base max-s:text-xs">
        {{ item.ism }}
      </p>
      <div class="flex gap-4">
        <Heart color="white" />
        <Download color="white" />
      </div>
    </div>
  </div>
</template>
