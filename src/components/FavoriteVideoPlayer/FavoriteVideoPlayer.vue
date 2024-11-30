<!-- <script setup>
import VideoOptionsModal from '@/components/VideoOptionsModal/VideoOptionsModal.vue'

class Modal {
  constructor() {
    this.value = false
  }

  openModal = () => {
    this.value = true
  }
  closeModal = () => {
    this.value = false
  }
} -->
<!-- </script> -->

<template>
  <div class="grid grid-cols-3 my-16 gap-20">
    <div class="flex gap-3 flex-col" v-for="item in ['', '', '', '', '', '']" :key="item">
      <div class="flex-shirk-0 w-full flex items-end relative">
        <iframe
          class="flex-shirk-0 w-full h-[284px] bg-zinc-300 rounded-[20px] bg-[url(@/assets/image/vedio.png)] bg-no-repeat bg-center"
          src=""
        ></iframe>
        <button class="absolute right-3 top-3">
          <img src="@/assets/icons/option.svg" alt="options" />
        </button>
      </div>
      <div class="pl-2">
        <p>video discriptions</p>
        <p>video discriptions</p>
        <p>video discriptions</p>
      </div>
    </div>
  </div>
</template>
