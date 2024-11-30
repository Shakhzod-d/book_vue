<script setup lang="ts">
import PoemsCard from '@/components/PoemsCard/PoemsCard.vue'

const data = [
  {
    id: 1,
    title: `QUDUQDAN TO’KILGAN NUR`,
    text: `Olam to'rt unsurdan iborat: tuproq, suv, havo, olov. Odam to'rt ustundan barhayot: ota, 
    ona, Vatan, el. `,
    subtitle: 'SHOIRNING BIRINCHI SHE’RI:'
  },
  {
    id: 2,
    title: `EY, KO’NGIL`,
    text: `Nopisand bosma xazon yaprog‘ini, Boshing uzra esla soya chog‘ini.Tanfi hukmiga azal bir chora yo‘q, Bandasi bilmas kelib-ketmog‘ini.`,
    subtitle: ''
  },
  {
    id: 3,
    title: `OTALAR VA BOLALAR`,
    text: `Agar xonadonga kirsa bir kitobBir kuni, albatta, varaqlanajak.O‘smani qoshida yayratsa ona,Qizi zulfin qilar burama gajak.`,
    subtitle: ''
  },
  {
    id: 4,
    title: `IZLAR`,
    text: `Ikki cheti orasta, Yolg‘izoyoq chambil yo‘l. Ketib boraman asta, Har yonda giyohlar mo‘l.`,
    subtitle: ''
  }
]
</script>

<template>
  <section
    class="bg-[url(@/assets/image/poems-bg.jpg)] min-h-[718px] w-full bg-top bg-cover flex items-center justify-center flex-col py-7"
  >
    <div
      class="max-w-[660px] text-left font-semibold italic font-serif text-3xl"
      style="text-shadow: rgba(0, 0, 0, 0.2) 2px 5px"
    >
      <h2 class="mb-6">ESKI KITOB</h2>
      <p>
        Eski kitoblarni o‘qidim ko‘p-ko‘p,<br />Oltinga topilmas ko‘rganim foyda:<br />Na’rasi
        chaqmoqdek shiddatli sher ham<br />Mushukcha bo‘lolmas sir qochgan joyda. <br /><br />Eski
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
    <img src="@/assets/image/pagination.png" class="block mx-auto" alt="" />
  </section>
</template>
