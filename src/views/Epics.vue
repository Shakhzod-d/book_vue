<script setup>
import TranslationList from '@/components/TranslationList/TranslationList.vue'

const data = [
  { id: 1, text: '„Bola Botir“ (2013)' },
  { id: 2, text: '„Olis yulduz“' }
]
</script>

<template>
  <header
    class="flex w-full bg-[url(@/assets/image/epics-header_bg.jpg)] items-center bg-no-repeat bg-cover justify-center gap-12 p-4 max-3xl:flex-wrap"
  >
    <img src="@/assets/image/epics-header_img.png" alt="" />
    <p class="font-semibold text-3xl leading-[38px] max-w-[1125px] font-serif max-sm:text-2xl max-m:text-xl max-s:text-base">
      Yaxshiyam, bu dunyoda ko’ngil qatidagi mudroq hislarni qaytadan uyg’otadigan, ezgu hotiralarni
      yodga soladigan kitoblar bor. Chingiz Aytmatov asarlarini eslayman. Buyuk muallifning
      talqinicha, odamlarning bir qavmi qachonlardir Shohdor Ona Bo'g'udan o'rigan, beozor bolakay
      dengizdan panoh izlab, baliqqa aylangisi keladi, mangu ayriliqqa mahkum baxtikaro
      kelinchakning ruhi esa tog’u toshlar aro darbadar kezib yuradi. Bular - achchiq taqdirlar,
      bular yuksak va sirli poeziyadir. Odam bolasi kitob o'qiyotganda, uni yozuvchi yozganini
      unutsa deyman. Asarning ichida kitobhonning o'zi ham yashasa deyman.
    </p>
  </header>
  <section><TranslationList :data="data" /></section>
</template>
