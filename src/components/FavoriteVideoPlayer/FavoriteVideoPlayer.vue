<script setup>
import FavoriteEmpty from '@/components/FavoriteEmpty/FavoriteEmpty.vue'
// import VideoOptionsModal from '@/components/VideoOptionsModal/VideoOptionsModal.vue'

// class Modal {
//   constructor() {
//     this.value = false
//   }

//   openModal = () => {
//     this.value = true
//   }
//   closeModal = () => {
//     this.value = false
//   }
// }

const data = ['', '', '', '', '', '']
</script>

<template>
  <template v-if="data.length !== 0">
    <div class="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 justify-center my-16 gap-20">
      <div class="flex gap-3 flex-col" v-for="item in data" :key="item">
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
  <template v-else>
    <FavoriteEmpty />
  </template>
</template>
