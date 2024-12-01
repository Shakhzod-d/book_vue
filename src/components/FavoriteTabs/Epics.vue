<script setup lang="ts">
import FavoriteTranslationList from '@/components/FavoriteTranslationList/FavoriteTranslationList.vue'

const data = [
  { id: 1, text: '„Bola Botir“ (2013)' },
  { id: 2, text: '„Olis yulduz“' }
]
</script>

<template>
  <div class="my-10">
    <FavoriteTranslationList :data="data" />
  </div>
</template>
