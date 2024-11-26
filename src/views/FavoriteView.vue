<script setup>
const list = [
  { label: 'Xotiralar', path: '/favorites/xotiralar' },
  { label: 'Video', path: '/favorites/videos' },
  { label: 'Suratlar', path: '/favorites/pictures' },
  { label: 'She’rlar', path: '/favorites/poems' },
  { label: 'Tarjimalar ', path: '/favorites/translations' },
  { label: 'Dostonlar', path: '/favorites/epics' },
  { label: 'Kitoblar', path: '/favorites/books' }
]
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
