<script setup lang="ts">
import { Download, Heart, Forward } from 'lucide-vue-next'
</script>

<template>
  <div class="container my-16">
    <div>
      <iframe
        class="w-full h-[618px] max-lg:h-[400px] max-s:h-[300px] bg-zinc-300 rounded-[20px] bg-[url(@/assets/image/vedio.png)] bg-no-repeat bg-center"
        src=""
        allowfullscreen
      ></iframe>
      <h2>Vedio title</h2>
      <p>video Description</p>
    </div>
    <div class="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 justify-center my-16 gap-20">
      <div
        class="flex gap-3 flex-col flex-shrink-0 relative"
        v-for="item in ['', '', '', '', '', '']"
        :key="item"
      >
        <div class="flex-shirk-0 w-full flex items-end gap-5">
          <iframe
            class="flex-shirk-0 w-full h-[284px] bg-zinc-300 rounded-[20px] bg-[url(@/assets/image/vedio.png)] bg-no-repeat bg-center"
            src=""
          ></iframe>
          <div class="flex flex-col gap-5 absolute right-5 top-36">
            <Heart />
            <Forward />
            <Download />
          </div>
        </div>
        <div class="pl-2">
          <p>video discriptions</p>
          <p>video discriptions</p>
          <p>video discriptions</p>
        </div>
      </div>
    </div>
  </div>
</template>
