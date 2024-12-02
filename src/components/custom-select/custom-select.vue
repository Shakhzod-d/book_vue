<script setup>
import { ChevronDown } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue'

const props = defineProps({
  text: String,
  options: Array,
  id: Number,
  param: String
})

const title = ref(props.text)

function changeTitle(t) {
  title.value = t
}

watch(
  () => props.text,
  (newText) => {
    title.value = newText
  }
)
</script>

<template>
  <div class="flex flex-col relative box">
    <!-- Select Button -->
    <div
      id="select"
      class="flex gap-3 items-center align-center cursor-pointer select"
      @click="selectActive"
    >
      <p class="text-[20px] text-white">{{ title }}</p>
      <ChevronDown color="#fff" />
    </div>

    <!-- Dropdown -->
    <div
      id="dropdown"
      class="bg-[#00000033] rounded-xl absolute top-7 py-2.5 px-[29px] flex flex-col dropdown"
      :class="id == 2 ? 'w-[200px]' : ''"
    >
      <RouterLink
        :to="{ name: item.path, params: { slug: item.param } }"
        class="text-white"
        v-for="item in options"
        :key="item.label"
        @click="changeTitle(item.label)"
      >
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
