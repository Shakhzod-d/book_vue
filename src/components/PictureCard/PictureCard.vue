<script setup lang="ts">
defineProps({ url: Array })
</script>
<template>
  <div
    class="max-w-[300px] w-full h-[300px] rounded-[10px] shadow relative"
    v-for="item of url"
    :key="url.id"
  >
    <img src="@/assets/icons/option.svg" alt="" class="absolute top-3 right-3" />
    <img :src="url.url" alt="rasm" class="w-full h-full rounded-[10px]" />
  </div>
</template>
