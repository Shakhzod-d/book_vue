<script setup>
import { api } from '@/api/api'
import { ref } from 'vue'

const isActive = ref(false)
//  api.get("/saqlangan-malumotlar/xotiralar")
const props = defineProps({
  id: Number,
  name: String
})
function FavoriteHandler() {
  if (isActive.value) {
    RemoveFavorite()

    isActive.value = false
  } else {
    AddFavorite()
    isActive.value = true
  }
}
async function AddFavorite() {
  try {
    api.post(`saqlab-quyish/${props.id}/${props.name}`)
  } catch (err) {
    console.error(err)
  }
}
async function RemoveFavorite() {
  api.delete(`/saqlanganlarni-o'chirish/${props.id}`)
}
</script>
<template>
  <img
    v-if="!isActive"
    src="../../assets/icons/like.svg"
    alt=""
    class="w-5"
    @click="FavoriteHandler"
  />
  <img
    v-if="isActive"
    src="../../assets/icons/likeActive.svg"
    alt=""
    class="w-5"
    @click="FavoriteHandler"
  />
</template>
