<script setup>
import Video from './Video.vue'

defineProps({
  data: Array
})
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 py-10"
  >
    <Video v-for="item of data" :key="item.id" :videoUrl="item.video_url" :title="item.ism" />
  </div>
</template>
