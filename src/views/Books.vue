<script setup lang="ts">
import { useApi } from '@/api/useApi';
import BooksList from '@/components/BooksList/BooksList.vue'
  const {data,} =useApi("/kitoblar")
</script>
<template>
  <div class="p-10">
    <BooksList  :books="data"/>
  </div>
</template>
