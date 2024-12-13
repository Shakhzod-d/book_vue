<script setup>
import { useApi } from '@/api/useApi'
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute() // Vue Router obyekti

// Slugni reaktiv qilib yaratish
const slug = ref(route.params.slug)

// API chaqiruvi
const { data, fetchData, loading } = useApi(slug.value)

// Slug o'zgarganda fetchData chaqirish
watch(
  () => route.params.slug,
  (newSlug) => {
    console.log(newSlug) // Yangilangan slugni chiqarish
    slug.value = newSlug // Slugni yangilash
    fetchData(newSlug) // Yangilangan slug bilan fetchData chaqirish
  },
  { immediate: true }
) // Komponent yuklanganda fetchData chaqirilishi uchun
</script>

<template>
  <div class="container flex flex-wrap gap-[50px] my-10">
    <!-- Render Photo Cards -->
    <PhotoCard v-for="item in data?.items" :key="item.id" :url="item.url"  v-show="!loading"/>
    <div class=" container flex justify-center items-center border" v-if="loading">
      <img src="../assets/icons/loading.svg" alt="" />
    </div>
  </div>
</template>
