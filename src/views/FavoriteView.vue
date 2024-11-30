<script setup>
import { list } from '@/utils/constants'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const navigate = useRouter()
const pathname = window.location.pathname
onMounted(() => {
  if (pathname.endsWith('/favorites')) {
    navigate.push('/favorites/xotiralar')
  }
})
</script>
<template>
  <main class="px-16 pt-10">
    <div class="bg-[#4EA2EF] w-full rounded-xl px-[35px] py-[13px] gap-[70px] flex mb-4">
      <RouterLink
        v-for="item of list"
        :key="item.label"
        class="text-xl text-white"
        :to="item.path"
        >{{ item.label }}</RouterLink
      >
    </div>
    <RouterView></RouterView>
  </main>
</template>
