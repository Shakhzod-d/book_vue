<script setup lang="ts">
import { useApi } from '@/api/useApi'
import TranslationList from '@/components/TranslationList/TranslationList.vue'

const { data } = useApi('/tarjimalar')
</script>

<template>
  <section
    class="bg-[url(@/assets/image/translation-bg.jpg)] bg-no-repeat bg-cover flex items-center gap-5 flex-wrap p-4 justify-center"
  >
    <img src="@/assets/image/author.jpg" alt="Sadulla hakimov" />
    <div>
      <h1 class="font-bold text-3xl leading-10 text-white">Sa’dulla Hakim</h1>
      <p class="font-normal text-3xl text-white max-w-[757px] max-m:text-2xl">
        <a class="underline" href="https://uz.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe"
          >Gyote</a
        >, <a class="underline" href="https://uz.wikipedia.org/wiki/Aleksandr_Pushkin">Pushkin</a>,
        <a class="underline" href="https://uz.wikipedia.org/wiki/Mixail_Lermontov"> Lermontov</a>,
        <a class="underline" href="https://uz.wikipedia.org/wiki/Yunus_Emre">Yunus Emro</a>
         kabi shoirlarning sheʼrlarini tarjima qilgan
      </p>
    </div>
  </section>
  <div>
    <TranslationList :data="data?.items" />
  </div>
</template>
