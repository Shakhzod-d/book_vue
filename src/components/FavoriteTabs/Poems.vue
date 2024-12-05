<script setup lang="ts">
import FavoritePoemsCard from '@/components/FavoritePoemsCard/FavoritePoemsCard.vue'
import FavoriteEmpty from '@/components/FavoriteEmpty/FavoriteEmpty.vue'

interface DataType {
  id: number
  text: string
  subtitle: string
  title: string
}

const data: DataType[] = [
  {
    id: 2,
    title: `EY, KO’NGIL`,
    text: `Nopisand bosma xazon yaprog‘ini,<br/>Boshing uzra esla soya chog‘ini.<br/>Tanfi hukmiga azal bir chora yo‘q,<br/>Bandasi bilmas kelib-ketmog‘ini.`,
    subtitle: ''
  },
  {
    id: 3,
    title: `OTALAR VA BOLALAR`,
    text: `Agar xonadonga kirsa bir kitob<br/>Bir kuni, albatta, varaqlanajak.<br/>O‘smani qoshida yayratsa ona,<br/>Qizi zulfin qilar burama gajak.`,
    subtitle: ''
  },
  {
    id: 4,
    title: `IZLAR`,
    text: `Ikki cheti orasta,<br/>Yolg‘izoyoq chambil yo‘l.<br/>Ketib boraman asta,<br/>Har yonda giyohlar mo‘l.`,
    subtitle: ''
  }
]
</script>

<template>
  <div class="my-10">
    <template v-if="data.length !== 0">
      <FavoritePoemsCard :poems="data" />
    </template>
    <template v-else>
      <FavoriteEmpty />
    </template>
  </div>
</template>
