<script setup>
import { useApi } from '@/api/useApi'
import Pagination from '@/components/pagination/pagination.vue'
import PoemsCard from '@/components/PoemsCard/PoemsCard.vue'
import { ref, watch } from 'vue'

const page = ref(0)
const { data: PoemData, loading, fetchData } = useApi(`/sherlar/?limit=4&offset=${page.value}`)

const pagination = (num) => {
  page.value = num
  console.log(num)
}
watch(page, (newPage) => {
  fetchData(`/sherlar/?limit=100&offset=${newPage}`)
})
</script>

<template>
  <section
    class="bg-[url(@/assets/image/poems-bg.jpg)] min-h-[718px] w-full bg-top bg-cover flex items-center justify-center flex-col py-7"
  >
    <div
      class="max-w-[660px] text-left font-semibold italic font-serif text-3xl max-sm:text-2xl max-m:text-xl max-s:text-base"
      style="text-shadow: rgba(0, 0, 0, 0.2) 2px 5px"
    >
      <h2 class="mb-6">ESKI KITOB</h2>
      <p>
        Eski kitoblarni o‘qidim ko‘p-ko‘p,<br />Oltinga topilmas ko‘rganim foyda:<br />Na’rasi
        chaqmoqdek shiddatli sher ham<br />Mushukcha bo‘lolmas sir qochgan joyda.<br /><br />Eski
        kitoblarni o‘qidim ko‘p-ko‘p,<br />Bozorda sotilmas olganim saboq:<br />Sirti mahkam deya
        qolma chuv tushib,<br />Ichidan panglagay usti tosh yong‘oq.<br /><br />Eski kitoblarni
        o‘qidim takror,<br />Bilganim shu bo‘ldi, bilmaganim bu:<br />Bedorlik, oh, nega bunchalar
        taxir,<br />Vah, nega bunchalar shirindir uyqu?<br /><br />Eski kitoblarni o‘qidim
        to‘ymay,<br />Qalbimni charog‘on etdi bir hikmat:<br />Kuydirsa kuydirsin ishq alangasi,<br />Yondirsa
        yondirsin ishq o‘ti faqat!
      </p>
    </div>
  </section>
  <section class="container mt-16">
    <div class="h-[300px] flex justify-center items-center" v-if="loading">
      <img src="../assets/icons/loading.svg" alt="" />
    </div>
    <PoemsCard :poems="PoemData?.items" v-if="!loading" />
    <div class="flex justify-center gap-3 py-2 mt-5">
      <Pagination
        v-if="PoemData"
        :count="PoemData.count"
        :set-count="pagination"
     
      />
    </div>
  </section>
</template>
