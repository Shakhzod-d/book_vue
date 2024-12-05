<script setup>
import FavoriteBooksList from '@/components/FavoriteBooksList/FavoriteBooksList.vue'
import FavoriteEmpty from '@/components/FavoriteEmpty/FavoriteEmpty.vue'
const books = []
</script>
<template>
  <div class="p-10">
    <template v-if="books.length !== 0">
      <FavoriteBooksList :books="books" />
    </template>
    <template v-else>
      <FavoriteEmpty />
    </template>
  </div>
</template>
