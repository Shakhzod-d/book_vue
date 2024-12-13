<script setup lang="ts">
import FavoritePoemsCard from '@/components/FavoritePoemsCard/FavoritePoemsCard.vue'
import FavoriteEmpty from '@/components/FavoriteEmpty/FavoriteEmpty.vue'
import { useApi } from '@/api/useApi'
const { data } = useApi('/saqlangan-malumotlar/sherlar')
console.log(data)
</script>

<template>
  <div class="my-10">
    <template v-if="data?.items.length !== 0">
      <FavoritePoemsCard :poems="data?.items" />
    </template>
    <template v-else>
      <FavoriteEmpty />
    </template>
  </div>
</template>
