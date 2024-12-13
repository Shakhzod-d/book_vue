<!-- <script setup>
import { ref, onMounted } from 'vue';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

// PDF.js uchun worker URLni o'rnatish
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// PDF manzilini sozlash
const pdfSrc = ref('https://sadulla-hakim.tolipovv.uz/media/data/SAYLANMA_X7wMUAC.pdf');
const canvasRef = ref(null);

const renderPdf = async () => {
  try {
    const canvas = canvasRef.value;
    if (!canvas) {
      console.error('Canvas elementi topilmadi!');
      return;
    }

    // PDF faylini yuklash
    const pdf = await pdfjsLib.getDocument(pdfSrc.value).promise;

    // Birinchi sahifani olish
    const page = await pdf.getPage(1);

    // Sahifani o'lchamiga moslashtirish
    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    // Canvas sozlash
    const context = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Canvasga PDFni render qilish
    const renderContext = {
      canvasCont -->
<template>
  <h1>Book Read</h1>
</template>