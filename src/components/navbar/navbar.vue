<script setup>
import { useRouter } from 'vue-router'
import CustomSelect from '../custom-select/custom-select.vue'
import { Menu, X, ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'

const openModal = ref(false)
const openSelect = ref(false)

const select = () => (openSelect.value = !openSelect.value)

const modal = () => (openModal.value = true)
const closeModal = (e) => {
  e.target === e.currentTarget
    ? (openModal.value = false)
    : e.target.classList.contains('btn')
      ? (openModal.value = false)
      : ''
}

const cModal = () => (openModal.value = false)

const router = useRouter(),
  routes = [
    { id: 1, path: '/memories', label: 'Xotiralar' },
    { id: 2, path: '/videos', label: 'Video' }
  ],
  selectRoute = [
    { id: 1, path: 'Poems', label: 'She’rlar ', param: '' },
    { id: 2, path: 'Translations', label: 'Tarjimalar', param: '' },
    { id: 3, path: 'Epics', label: 'Dostonlar', param: '' },
    { id: 4, path: 'Books', label: 'Kitoblar', param: '' }
  ],
  selectRoute2 = [
    { id: 1, path: 'Picture', label: 'Yoshlikdagi suratlar ', param: '/yoshlikdagi-suratlar' },
    { id: 2, path: 'Picture', label: 'Oilaviy suratlar ', param: '/oilaviy-suratlar' },
    { id: 3, path: 'Picture', label: 'Hamkasblar bilan', param: '/hamkasblar-bilan' }
  ]
</script>

<template>
  <header class="bg-[url('../../src/assets/image/header.png')] w-full py-6 shadow-xl bg-cover">
    <div class="container flex justify-between items-center gap-4 max-m:gap-2">
      <RouterLink
        to="/"
        class="text-[#FFFFFF] font-bold text-[24px] flex-shrink-0 text-nowrap max-m:text-base"
        >Sa’dulla Hakim</RouterLink
      >
      <nav class="w-full max-w-[700px] max-lg:hidden">
        <ul class="flex justify-between max-w-[700px] m-auto gap-4 max-xl:max-w-[500px]">
          <CustomSelect text="Kitoblar" :options="selectRoute" :id="1" />
          <RouterLink
            :to="item.path"
            class="text-xl text-white"
            v-for="item of routes"
            :key="item.id"
            >{{ item.label }}</RouterLink
          >
          <CustomSelect text="Suratlar" :options="selectRoute2" :id="2" />
        </ul>
      </nav>
      <div class="flex gap-4">
        <div
          class="max-w-[250px] border border-white h-[40px] rounded-3xl px-6 flex py-[10px] justify-between gap-2"
        >
          <input
            type="text"
            class="w-full bg-transparent text-white text-sm placeholder:text-white border-none focus:outline-none focus:ring-0"
            placeholder="Search"
          />

          <img src="../../../src/assets/icons/search.svg" alt="search" class="search" />
        </div>
        <div
          class="flex flex-col items-center justify-center gap-2"
          @click="() => router.push('/favorites')"
        >
          <img src="../../../src/assets/icons/like.svg" alt="search" class="like" />
        </div>
      </div>
      <button class="hidden max-lg:block" @click="modal">
        <Menu color="#fff" size="30" class="max-m:w-6 max-m:h-6" />
      </button>
    </div>
  </header>
  <transition name="modal">
    <div
      v-if="openModal.valueOf()"
      @click="closeModal"
      class="fixed w-full h-screen bg-[rgba(0,0,0,0.7)] z-50 flex justify-end translate-x-0"
    >
      <div class="bg-white w-[300px] h-screen relative p-6 pt-16">
        <button class="btn absolute right-6 top-6" @click="cModal">
          <X size="40" />
        </button>

        <nav>
          <ul class="flex flex-col justify-between max-w-[700px] m-auto gap-4 max-xl:max-w-[500px]">
            <RouterLink
              :to="{ name: item.path, params: { slug: item.param } }"
              class="text-black text-xl"
              v-for="item in selectRoute"
              :key="item.label"
              @click="cModal"
            >
              {{ item.label }}
            </RouterLink>

            <RouterLink
              :to="item.path"
              class="text-xl text-black"
              v-for="item of routes"
              :key="item.id"
              @click="cModal"
            >
              {{ item.label }}
            </RouterLink>

            <div class="flex flex-col">
              <h2 class="text-xl text-black flex items-center gap-2" @click="select">
                Suratlar <ChevronDown color="#000" />
              </h2>
              <div
                v-if="openSelect.valueOf()"
                class="flex flex-col justify-between max-w-[700px] pl-4 gap-4 max-xl:max-w-[500px]"
              >
                <RouterLink
                  :to="{ name: item.path, params: { slug: item.param } }"
                  class="text-black text-xl"
                  v-for="item in selectRoute2"
                  :key="item.label"
                  @click="cModal"
                >
                  {{ item.label }}
                </RouterLink>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    background-color 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
