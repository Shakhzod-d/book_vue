<script setup>
import { Forward } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import LikeBtn from '../LIkeBtn/LikeBtn.vue'
import { ref } from 'vue'

defineProps({
  poems: {
    type: Array,
    required: true
  }
})

const router = useRouter()
const likeBtn = ref(null)

function click(e, id) {
  if (e.target !== likeBtn.value) {
    router.push({ name: 'Poem', params: { id } })
  }
}
</script>

<template>
  <div class="flex flex-wrap gap-16 justify-center">
    <div
      class="pt-8 px-10 pb-10 max-s:py-5 max-s:px-6 max-w-[548px] w-full bg-[linear-gradient(180deg,#355F85_0%,#477EB0_11%,#4EA2EF_34%,#5EA7EB_72%)] rounded-lg shadow-md border border-gray-200 relative text-white overflow-hidden hover:translate-y-[-6px] transition-all hover:shadow-2xl"
      v-for="item in poems"
      :key="item.id"
      @click="(e) => click(e, item.id)"
    >
      <div class="flex items-center mb-4">
        <img
          src="@/assets/image/poems-card-img.png"
          alt="Avatar"
          class="w-[100px] h-[100px] rounded-full max-lg:w-[50px] max-lg:h-[50px]"
        />
        <div class="ml-3">
          <h2 class="text-3xl leading-10 font-normal font-serif underline max-s:text-2xl">
            Sa’dulla Hakim
          </h2>
        </div>
      </div>
      <div>
        <p class="text-white text-[23px] font-semibold max-s:text-xl">{{ item.subtitle }}</p>
        <h3 class="text-white text-[23px] font-semibold mt-4 max-s:text-xl">
          {{ item.ism }}
        </h3>
      </div>
      <p
        class="text-white text-[19px] font-normal text-left max-s:text-base text-nowrap"
        v-html="item.text"
      ></p>
      <div
        class="absolute top-[22px] right-[22px] max-s:top-3 max-s:right-3 flex gap-2 flex-col"
        ref="likeBtn"
      >
        <span>
          <LikeBtn />
        </span>
        <Forward class="stroke-white" />
      </div>
    </div>
  </div>
</template>
