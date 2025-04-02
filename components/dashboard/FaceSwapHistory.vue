<script setup>
import { faceSwapService } from '@/api/services/faceSwapService.js'

const service = faceSwapService

const { data: historyFaceSwapList, pending: isLoading } = await useAsyncData(
  'historyFaceSwaps',
  () => service.getHistoryFaceSwap().then(res => res.data),
  { lazy: true }
);
</script>

<template>
  <div v-if="isLoading" class="">
    <div class="grid sm:grid-cols-12 gap-y-8 sm:gap-4">
      <div class="grid gap-4 w-full sm:col-span-4">
        <USkeleton class="h-40 w-full rounded-lg" />
        <USkeleton class="h-6 w-ful" />
        <USkeleton class="h-6 w-ful" />
      </div>
      <div class="grid gap-4 w-full sm:col-span-4">
        <USkeleton class="h-40 w-full rounded-lg" />
        <USkeleton class="h-6 w-ful" />
        <USkeleton class="h-6 w-ful" />
      </div>
      <div class="grid gap-4 w-full sm:col-span-4">
        <USkeleton class="h-40 w-full rounded-lg" />
        <USkeleton class="h-6 w-ful" />
        <USkeleton class="h-6 w-ful" />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="grid sm:grid-cols-12 gap-4">
      <div v-for="(item, index) in historyFaceSwapList" :key="index"
        class="sm:col-span-4 flex flex-col border border-gray-200 shadow-2xs rounded-xl bg-slate-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <NuxtImg :src="`https://face-swap-api.erkansivas.xyz/uploads/${item.resultImage}`" :title="item.id"
          class="w-full h-60 object-cover rounded-t-xl" />
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
    <div v-if="historyFaceSwapList?.length === 0" class="w-full flex flex-col items-center text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
      </svg>

      <span>No history</span>
    </div>
  </div>
</template>