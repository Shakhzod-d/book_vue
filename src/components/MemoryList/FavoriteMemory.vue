<script setup>
import FavoriteEmpty from '@/components/FavoriteEmpty/FavoriteEmpty.vue'
const arr = [
  // 1, 2, 3, 4, 5, 6, 7, 8
]
</script>

<template>
  <template v-if="arr.length !== 0">
    <div
      class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-rows-auto justify-center gap-4"
    >
      <div
        class="w-full h-[300px] border bg-white shadow-md rounded-md p-4"
        v-for="item of arr"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </template>
  <template v-else>
    <FavoriteEmpty />
  </template>
</template>
