<script setup>
import { useApi } from '@/api/useApi'
import MemoriesList from '@/components/MemoryList/MemoriesList.vue'
import Pagination from '@/components/pagination/pagination.vue'
import { ref, watch } from 'vue'

const page = ref(0)
const { data, loading, fetchData } = useApi(`/xotiralar/?limit=10&offset=${page.value}`)

const pagination = (num) => {
  page.value = num
  console.log(num)
}
watch(page, (newPage) => {
  fetchData(`/sherlar/?limit=100&offset=${newPage}`)
})
</script>

<template>
  <div>
    <div
      class="bg-[url(@/assets/image/memory-bg.png)] bg-cover flex gap-[55px] flex-wrap items-end justify-center py-5"
    >
      <img src="@/assets/image/memory_img.png" alt="" />
      <p
        class="mb-[23px] text-black/80 text-[80px] font-normal font-['Lovers_Quarrel'] leading-[90.24px] text-nowrap max-m:text-6xl max-s:text-5xl"
      >
        Xotiralar tirik odamlar, -<br />Mehru nafrat baxsiga kodir.
      </p>
    </div>
    <div class="h-[300px] flex justify-center items-center" v-if="loading">
      <img src="../assets/icons/loading.svg" alt="" />
    </div>
    <MemoriesList :data="data?.items" v-else />
    <div class="flex justify-center gap-3 py-2 mt-5">
      <Pagination v-if="data" :count="data.count" :set-count="pagination" />
    </div>
  </div>
</template>
