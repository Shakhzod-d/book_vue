<script setup lang="ts">
import { useApi } from '@/api/useApi';
import VideoList from '@/components/VideoPlayer/VideoList.vue'

const {data } =useApi("/video")
console.log(data);

</script>

<template>
  <div class="container">
  
    <VideoList :data="data.items"/>
  </div>
</template>
