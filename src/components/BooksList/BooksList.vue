<script setup>
defineProps({
  books: Array
})
</script>

<template>
  <div class="flex flex-wrap justify-start gap-10">
    <div
      class="w-full bg-white shadow-xl max-w-[300px] min-h-[330px] p-4 rounded-lg cursor-pointer hover:translate-y-[-6px] transition-all hover:shadow-2xl"
      v-for="item of books"
      :key="item"
    >
      <div class="w-full h-[150px]">
        <img :src="item.muqova" alt="photo" class="h-[150px] object-center w-full" />
      </div>
      <h4 class="text-[20px] font-bold">{{ item.ism }}</h4>
      <p class="font-semibold mb-1">
        Nashr qilingan yili: <b>{{ item.nashr_qilingan_yili }}</b>
      </p>
      <p class="font-medium mb-1">
        Nashriyot: <b>{{ item.nashriyot }}</b>
      </p>
      <p class="font-medium mb-1">
        Til: <b>{{ item.til }}</b>
      </p>
      <div class="flex gap-1">
        <download
          class="p-2 bg-gray-500 rounded-md text-white active:scale-[.9] w-full"
          is="https://sadulla-hakim.tolipovv.uz/media/data/SAYLANMA_X7wMUAC.pdf"
        >
          yuklab olish
        </download>
        <RouterLink to="/read-book" class="w-full">
          <button class="p-2 bg-green-500 rounded-md text-white active:scale-[.9] w-full">
            o'qish
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
