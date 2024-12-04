<script setup lang="ts">
import { useApi } from '@/api/useApi'
import MemoriesList from '@/components/MemoryList/MemoriesList.vue'
const { data, } = useApi('/xotiralar')
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
    <MemoriesList :data="data" />
  </div>
</template>
