<script setup>
import { useApi } from '@/api/useApi'
import { Heart, Forward, Eye } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
const route = useRoute() // Route ma'lumotlariga kirish
const id = route.params.id
const { data } = useApi(`/id-orqali/${id}`)

// const sanitizedHtml = DOMPurify.sanitize(data[0].text)

//  const poem =data[0]?.text
</script>

<template>
  <div class="continer flex justify-center pt-[142px]">
    <div class="max-w-[700px] flex flex-col items-center gap-[60px]">
      <div class="flex flex-col items-center gap-4">
        <img src="@/assets/image/poems-card-img.png" alt="" class="w-[150px] h-[150px]" />
        <h2 class="font-bold text-black text-3xl leading-[38px] underline text-center">
          {{ data[0].ism }}
        </h2>
      </div>
      <h2 class="font-bold text-black text-[40px] leading-[51px]">VATANGA MANSUBLIK</h2>

      <p
        class="font-normal text-black text-[35px] leading-[44px] text-left"
        v-html="data[0].text"
      ></p>
      >

      <div class="flex w-full justify-between mb-8">
        <div class="flex gap-[25px]">
          <Heart />
          <Forward />
        </div>
        <p class="font-normal text-black text-[15px] leading-[19px] text-center">
          <Eye /> {{ data[0].tashrif_buyuruvchilar }}
        </p>
      </div>
    </div>
  </div>
</template>
