<script setup>
import { Heart, Forward, Eye } from 'lucide-vue-next'
</script>

<template>
  <div class="continer flex justify-center pt-[142px]">
    <div class="max-w-[700px] flex flex-col items-center gap-[60px]">
      <div class="flex flex-col items-center gap-4">
        <img src="@/assets/image/poems-card-img.png" alt="" class="w-[150px] h-[150px]" />
        <h2 class="font-bold text-black text-3xl leading-[38px] underline text-center">
          Sa’dulla Hakim
        </h2>
      </div>
      <h2 class="font-bold text-black text-[40px] leading-[51px]">VATANGA MANSUBLIK</h2>

      <p class="font-normal text-black text-[35px] leading-[44px] text-left">
        Banogoh cho‘qqidan qulasa bir tosh <br />Tog‘ poyiga tushar, togni tark etmas. <br />Et
        bilan tirnokdek bir jonu bir tan <br />Vatandan yaralgan Vatandan ketmas.<br /><br />Quyoshga
        intilgan havoyi bug‘lar <br />Baland parvozlarni qilsa ham havas <br />Bir kun qaytib kelar
        o‘kirib-yig‘lab, <br />Vatandan yaralgan Vatandan ketmas.<br /><br />Shashmaqom - ming
        yillik navo muattar, <br />Ochsam ko‘kayimni yangrar qadim sas. <br />Avlodlar tug‘ilar,
        ajdodlar o‘tar, <br />Vatandan yaralgan Vatandan ketmas.<br /><br />Ulug‘lar yuksalar yer
        ostida ham, <br />Haykal bo‘lib o‘sar, eli unutmas. <br />Shahidlar bog‘idan kuylab
        o‘taman: <br />Vatandan yaralgan Vatandan ketmas.<br /><br />Toshdan uchgan uchqun yalt etib
        o‘char, <br />O’chgan cho‘g‘ qayta o‘z holiga kelmas. <br />Choponing silkisang g‘ubori
        ko‘char, <br />Vatandan to‘qilgan Vatandan emas!
      </p>

      <div class="flex w-full justify-between mb-8">
        <div class="flex gap-[25px]">
          <Heart />
          <Forward />
        </div>
        <p class="font-normal text-black text-[15px] leading-[19px]"><Eye /> 10K</p>
      </div>
    </div>
  </div>
</template>
