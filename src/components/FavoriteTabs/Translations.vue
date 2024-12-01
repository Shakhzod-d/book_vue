<script setup lang="ts">
import FavoriteTranslationList from '@/components/FavoriteTranslationList/FavoriteTranslationList.vue'

const data = [
  { id: 1, text: 'Kechagi kun (Lermentov sheri tarjimasi)' },
  { id: 2, text: 'Kechagi kun (Lermentov sheri tarjimasi)' }
]
</script>

<template>
  <div class="my-10">
    <FavoriteTranslationList :data="data" />
  </div>
</template>
