<script setup lang="ts">
import FavoriteBooksList from '@/components/FavoriteBooksList/FavoriteBooksList.vue'
const books = [
  {
    id: 1,
    ism: "Yurt O'g'loni",
    muqova: 'http://18.194.233.149/media/muqova/7.96_Kb_c5tnYu5.jpg',
    nashr_qilingan_yili: 2021,
    nashriyot: 'Toshkent nashriyoti',
    til: 'Uzbek'
  }
]
</script>
<template>
  <div class="p-10">
    <FavoriteBooksList  :books="books"/>
  </div>
</template>
