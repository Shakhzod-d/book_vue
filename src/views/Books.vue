<script setup lang="ts">
import { useApi } from '@/api/useApi'
import BooksList from '@/components/BooksList/BooksList.vue'
const { data } = useApi('/kitoblar')

console.log(data)
</script>
<template>
  <div class="p-10">
    <BooksList :books="data?.items" />
  </div>
</template>
