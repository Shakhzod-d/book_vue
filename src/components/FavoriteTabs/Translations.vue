<script setup>
import FavoriteTranslationList from '@/components/FavoriteTranslationList/FavoriteTranslationList.vue'
import FavoriteEmpty from '@/components/FavoriteEmpty/FavoriteEmpty.vue'

const data = [
  { id: 1, text: 'Kechagi kun (Lermentov sheri tarjimasi)' },
  { id: 2, text: 'Kechagi kun (Lermentov sheri tarjimasi)' }
]
</script>

<template>
  <div class="my-10">
    <template v-if="data.length !== 0">
      <FavoriteTranslationList :data="data" />
    </template>
    <template v-else>
      <FavoriteEmpty />
    </template>
  </div>
</template>
