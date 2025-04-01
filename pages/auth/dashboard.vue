<script setup>
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
  <div class="mb-2 sm:mb-4 flex flex-col gap-2 sm:gap-6 px-8 py-2 sm:py-4">
    <h2 class="text-center text-sm sm:text-xl">History Face Swaps</h2>
  </div>

  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div class="flex flex-wrap gap-4">
      <div v-for="(item, index) in historyFaceSwapList" :key="index"
        class="w-[32%] flex flex-col border border-gray-200 shadow-2xs rounded-xl bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <NuxtImg :src="`https://face-swap-api.erkansivas.xyz/uploads/${item.resultImage}`" :title="item.id"
          class="w-full h-auto object-contain rounded-t-xl" />
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            {{ item._id }}
          </h3>
          <p class="mt-1 text-gray-500 dark:text-neutral-400">
            Processing Time: {{ item.processingTime }}
          </p>
          <p class="mt-5 text-xs text-gray-500 dark:text-neutral-500">
            {{ $dayjs(item.createdAt).toNow() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>