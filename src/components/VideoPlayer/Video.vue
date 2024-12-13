<template>
  <div>
    <!-- Thumbnail -->
    <div
      class="w-full h-[350px] bg-gray-300 rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
      @click="showModal = true"
    >
      <img
        :src="thumbnailUrl"
        alt="Video Thumbnail"
        class="w-full h-full object-cover"
        v-if="thumbnailUrl"
      />
      <span v-else class="text-gray-500">Thumbnail Not Available</span>
    </div>
    <p class="text-2xl font-semibold mt-2">
      {{ title.length >= 30 ? title.slice(0, 30) + '...' : title }}
    </p>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg w-[90%] max-w-[1200px] p-4 relative h-[800px]">
        <!-- Close Button -->
        <button
          class="absolute top-2 right-2 text-gray-600 hover:text-black"
          @click="modalClose"
        >
          ✖
        </button>

        <!-- Loading Indicator -->
        <p
          class="text-black text-xl font-bold text-center absolute left-[45%] top-[45%]"
          v-if="isLoading"
        >
          Loading...
        </p>

        <!-- Video -->
        <iframe
          :src="embedUrl"
          v-if="embedUrl"
          title="YouTube Video Player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full rounded-lg"
          @load="isLoading = false"
        ></iframe>
        <p v-else class="text-red-500">Invalid Video URL</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Props
const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// State
const showModal = ref(false);
const isLoading = ref(true);

// Functions
const modalClose = () => {
  showModal.value = false;
  isLoading.value = true;
};

// Computed Properties
const embedUrl = computed(() => {
  try {
    const url = new URL(props.videoUrl);
    let videoId = url.pathname.split('/').pop();
    if (!videoId) throw new Error('No video ID found');
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`;
  } catch (e) {
    console.error('Invalid YouTube URL:', e.message);
    return '';
  }
});

const thumbnailUrl = computed(() => {
  try {
    const url = new URL(props.videoUrl);
    let videoId = url.pathname.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch (e) {
    console.error('Invalid YouTube URL');
    return null;
  }
});
</script>
