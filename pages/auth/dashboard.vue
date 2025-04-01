<script setup>
import { ref } from "vue"
import { faceSwapService } from '@/api/services/faceSwapService.js'

definePageMeta({
  middleware: 'auth'
});

const service = faceSwapService

const { data: historyFaceSwapList, pending: isLoading } = await useAsyncData(
  'historyFaceSwaps',
  () => service.getHistoryFaceSwap().then(res => res.data),
  { lazy: true }
);
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div v-for="(item, index) in historyFaceSwapList" :key="index">
      <NuxtImg :src="`${window.location.origin}/${item.resultImage}`" :title="item.id"
        class="w-full h-full object-contain rounded-lg" />
    </div>
  </div>
</template>