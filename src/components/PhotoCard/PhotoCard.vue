<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
defineProps({ url: Array<{ id: number; url: string }> })
</script>
<template>
  <div
    class="max-w-[400px] w-full h-[400px] rounded-[10px] shadow relative"
    v-for="item of url"
    :key="url?.id"
  >
    <Heart class="absolute top-3 right-3" />
    <img :src="url?.url" alt="rasm" class="w-full h-full rounded-[10px]" />
  </div>
</template>
