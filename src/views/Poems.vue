<script setup>
import { useApi } from '@/api/useApi'
import PoemsCard from '@/components/PoemsCard/PoemsCard.vue'
import Button from '@/components/customButton/CustomButton.vue'

const { data } = useApi('/sherlar')
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
    <PoemsCard :poems="data" />
    <div class="w-full flex justify-center gap-3 py-2">
      <Button :text="'Prev'" />
      <Button :text="'1'" />
      <Button :text="'2'" />
      <Button :text="'..'" />
      <Button :text="'next'" />
    </div>
  </section>
</template>
