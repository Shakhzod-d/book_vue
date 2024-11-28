<script setup lang="ts">
import { Heart, Forward } from 'lucide-vue-next'

defineProps({
  poems: Array
})
</script>

<template>
  <div class="grid grid-cols-3 items-start gap-16">
    <div
      class="pt-8 px-10 pb-10 max-w-[548px] bg-[linear-gradient(180deg,#355F85_0%,#477EB0_11%,#4EA2EF_34%,#5EA7EB_72%)] rounded-lg shadow-md border border-gray-200 relative text-white max-h-[338px] overflow-hidden"
      v-for="item of poems"
      :key="item.id"
    >
      <div class="flex items-center mb-4">
        <img
          src="@/assets/image/poems-card-img.png"
          alt="Avatar"
          class="w-[100px] h-[100px] rounded-full"
        />
        <div class="ml-3">
          <h2 class="text-3xl leading-10 font-normal font-serif underline">Sa’dulla Hakim</h2>
        </div>
      </div>
      <div>
        <p class="text-white text-[23px] font-semibold">{{ item.subtitle }}</p>
        <h3 class="text-white text-[23px] font-semibold mt-4">{{ item.title }}</h3>
      </div>
      <p class="w-[325px] text-white text-[19px] font-normal">{{ item.text }}</p>
      <div class="absolute top-[22px] right-[22px] flex gap-2 flex-col">
        <Heart class="stroke-white" />
        <Forward class="stroke-white" />
      </div>
    </div>
  </div>
</template>
