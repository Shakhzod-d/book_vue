<script setup>
import { Forward,  } from 'lucide-vue-next'
import { defineProps } from 'vue'
import LikeBtn from '../LIkeBtn/LikeBtn.vue'
defineProps({
  data: Array
})
</script>

<template>
  <div class="p-11 flex flex-col gap-5 max-m:p-8 max-s:p-4">
    <div
      class="w-full bg-blue-500 py-4 px-7 rounded-md flex justify-between cursor-pointer"
      v-for="item of data"
      :key="item.id"
    >
      <p class="text-xl text-white font-medium max-sm:text-base max-m:text-xs max-s:text-[10px]">
        {{ item.ism }}
      </p>
      <div class="flex gap-4">
        <LikeBtn :id="item.id" name="xotiralar"/>
        <Forward color="white" />
      </div>
    </div>
  </div>
</template>
