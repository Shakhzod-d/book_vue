<script setup>
import { Navbar, Footer } from './components'

</script>

<template>
  <Navbar />
  <main class="flex-1 bg-[#f1f1f1]">
    <RouterView></RouterView>
  </main>
  <Footer />
</template>
