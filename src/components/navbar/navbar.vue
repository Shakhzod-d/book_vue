<script setup>
import { useRouter } from 'vue-router'
import CustomSelect from '../custom-select/custom-select.vue'
const router = useRouter(),
  routes = [
    { id: 1, path: '/memories', label: 'Xotiralar' },
    { id: 2, path: '/videos', label: 'Video' }
  ],
  selectRoute = [
    { id: 1, path: '/poems', label: 'She’rlar ' },
    { id: 2, path: '/translations', label: 'Tarjimalar' },
    { id: 3, path: '/epics', label: 'Dostonlar' },
    { id: 4, path: '/books', label: 'Kitoblar' }
  ],
  selectRoute2 = [
    { id: 1, path: '/poems', label: 'Yoshlikdagi suratlar ' },
    { id: 2, path: '/translations', label: 'Oilaviy suratlar ' },
    { id: 3, path: '/epics', label: 'Hamkasblar bilan' }
  ]
</script>

<template>
  <header class="bg-[url('../../src/assets/image/header.png')] w-full py-6 shadow-xl">
    <div class="container flex justify-between items-center">
      <RouterLink to="/" class="text-[#FFFFFF] font-bold text-[24px]">Sa’dulla Hakim</RouterLink>
      <nav class="w-full max-w-[700px]">
        <ul class="flex justify-between max-w-[700px] m-auto">
          <CustomSelect text="Kitoblar" :options="selectRoute" :id="1"/>
          <RouterLink
            :to="item.path"
            class="text-xl text-white"
            v-for="item of routes"
            :key="item.id"
            >{{ item.label }}</RouterLink
          >
          <CustomSelect text="Suratlar" :options="selectRoute2" :id="2"/>
        </ul>
      </nav>
      <div class="flex gap-4">
        <div
          class="w-[250px] border border-white h-[40px] rounded-3xl px-6 flex py-[10px] justify-between gap-2"
        >
          <input
            type="text"
            class="w-full bg-transparent text-white text-md placeholder:text-white border-none focus:outline-none focus:ring-0"
            placeholder="Search"
          />

          <img src="../../../src/assets/icons/search.svg" alt="search" class="search" />
        </div>
        <div
          class="flex flex-col items-center justify-center gap-2"
          @click="() => router.push('/favorites')"
        >
          <img src="../../../src/assets/icons/like.svg" alt="search" class="like" />
        </div>
      </div>
    </div>
  </header>
</template>
