<script setup>
import { useApi } from '@/api/useApi'
import PhotoCard from '@/components/PhotoCard/PhotoCard.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const res = ref(null) // Initialize as null
const loading = ref(false)

const ResData = async (url) => {
  try {
    loading.value = true
    const { data } = await useApi(url)
    res.value = data // Ensure this matches the expected format for PhotoCard
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
}

ResData(route.params.slug)

watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      ResData(newSlug)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="container flex flex-wrap gap-[50px] my-10">
    <p v-if="loading">loading..</p>
    <PhotoCard v-if="!loading && res" :url="res" />
    <!-- Add a null check -->
  </div>
</template>
