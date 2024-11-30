<script setup>
import { Heart, Share2, Download } from 'lucide-vue-next'

defineProps({
  isOpen
})
</script>

<template>
  <div v-if="isOpen.value" class="w-full h-screen bg-transparent opacity-0"></div>
  <div
    v-if="isOpen.value"
    class="absolute right-[20px] top-20 flex justify-center items-center z-50"
  >
    <div class="bg-white rounded-lg shadow-lg w-64" @click.stop>
      <div class="p-4">
        <ul class="space-y-4">
          <li class="flex items-center space-x-2">
            <Share2 class="w-5 h-5" />
            <span>Поделиться</span>
          </li>
          <li class="flex items-center space-x-2">
            <Heart class="w-5 h-5" />
            <span>Убрать из отложенного</span>
          </li>
          <li class="flex items-center space-x-2">
            <Download class="w-5 h-5" />
            <span>Скачать</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
