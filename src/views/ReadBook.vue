<script setup>
import { ref } from 'vue'
import PdfViewer from 'pdf-viewer-vue'
import { GlobalWorkerOptions } from 'pdfjs-dist'

// Worker'ni sozlash
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`

const pdfSrc = ref('/src/assets/book.pdf') // Faylni public papkaga joylang

const onLoaded = () => {
  console.log('PDF fayli yuklandi!')
}

const onError = (error) => {
  console.error('PDF yuklashda xatolik:', error)
}
</script>

<template>
  <PdfViewer
    :source="pdfSrc"
    @loaded="onLoaded"
    @error="onError"
    @rendering="() => console.log('PDF Rendering boshladi...')"
    @rendered="() => console.log('PDF Rendering tugadi')"
  >
  </PdfViewer>
</template>
