<script setup>
import { ref } from 'vue'

const props = defineProps({
  count: Number,
  setCount: Function
})
const fakeArray = new Array(props.count).fill(null).map((_, index) => index + 1)
const isActive = ref(1)
const activeFun = (number) => {
  props.setCount(number - 1)
  isActive.value = number
}
</script>

<template>
  <div class="border border-gray-400 rounded-[40px] flex gap-3 p-2">
    <button
      class="border-none p-1 h-8 w-8 rounded-full hover:bg-slate-200"
      v-for="item of fakeArray"
      :class="isActive === item ? 'bg-slate-200' : ''"
      :key="item"
      @click="() => activeFun(item)"
    >
      {{ item }}
    </button>
  </div>
</template>
