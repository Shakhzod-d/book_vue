<script setup>
import { ChevronDown } from 'lucide-vue-next'

import { RouterLink } from 'vue-router'

defineProps({
  text: String,
  options: Array
})
</script>
<template>
  <div class="flex flex-col relative box">
    <!-- Select Button -->
    <div
      id="select"
      class="flex gap-3 items-center align-center cursor-pointer select"
      @click="selectActive"
    >
      <p class="text-[20px] text-white">{{ text }}</p>
      <ChevronDown color="#fff" />
    </div>

    <!-- Dropdown -->
    <div
      id="dropdown"
      class="bg-[#00000033] rounded-xl absolute top-8 py-2.5 px-[29px] flex flex-col dropdown"
    >
      <RouterLink :to="item.path" class="text-white" v-for="item in options" :key="item.label">
        {{ item.label }}
      </RouterLink>
    </div>
  </div>
</template>

<style>
.dropdown {
  display: none;
}
.dropdown:hover {
  display: flex;
}

.select:hover + .dropdown {
  display: flex;
}
</style>
