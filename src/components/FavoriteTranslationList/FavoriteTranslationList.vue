<script setup lang="ts">
defineProps({
  data: Array<{ id: number; text: string }>
})
</script>

<template>
  <div class="flex flex-col gap-5">
    <div
      class="w-full bg-gradient-to-b items-center from-sky-700 to-sky-400 py-4 px-7 rounded-md flex justify-between cursor-pointer max-m:px-4"
      v-for="item of data"
      :key="item.id"
    >
      <p class="text-xl text-white font-medium max-sm:text-lg max-m:text-base max-s:text-xs">
        {{ item.text }}
      </p>
      <div class="flex gap-4">
        <img src="@/assets/icons/option.svg" alt="" />
      </div>
    </div>
  </div>
</template>
