<script setup>
import { faceSwapService } from '@/api/services/faceSwapService.js'
import { toast } from 'vue3-toastify'

const service = faceSwapService

const pageState = useState('pageState', () => ({
  isUpload: false,
  finalResult: null,
  isResult: false
}))

const state = useState('state', () => ({
  sourceFiles: null,
  targetFiles: null,
  selectedMedia: {},
}))

async function fileUpload() {
  if (!state.value.sourceFiles || !state.value.targetFiles) {
    toast.error('Please select face and target images')
    return
  }

  pageState.value.isUpload = true

  try {
    const res = await service.uploadImages(state.value.sourceFiles, state.value.targetFiles)

    toast.success('Face Swap is successfully!')
    state.value.sourceFiles = null
    state.value.targetFiles = null
    pageState.value.finalResult = res.data
    pageState.value.isResult = true
  } catch (error) {
    console.error(error)
    pageState.value.isResult = false
  }

  pageState.value.isUpload = false
}
</script>

<template>
  <div>
    <div class="mb-2 sm:mb-4 flex flex-col gap-2 sm:gap-6 px-8 py-2 sm:py-6">
      <h1 class="text-center text-2xl font-bold sm:text-5xl">Free AI Face Swap for Photos</h1>
      <h2 class="text-center text-sm sm:text-xl">Easily swap faces in photos for free.</h2>
    </div>

    <div class="relative block md:grid md:grid-rows-2 md:grid-cols-6 md:grid-flow-col md:gap-4">
      <div
        class="mb-4 md:mb-0 md:row-span-2 md:col-span-4 w-full max-h-[20rem] md:max-h-[29rem] elative block overflow-hidden rounded-lg bg-slate-800 text-center">
        <div v-if="!pageState.isResult && !pageState.isUpload" class="h-full flex flex-col items-center justify-center">
          <NuxtImg
            src="/images/face-swap-example-result.jpg"
            title="Example Result"
            class="w-full object-contain rounded-lg"
            placeholder
          />
        </div>
        <div v-if="pageState.isUpload"
          class="w-full h-[20rem] md:h-[29rem] max-h-[20rem] md:max-h-[29rem] flex items-center justify-center bg-gray-700">
          <div class="flex flex-col items-center">
            <svg class="w-12 h-12 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <p class="mt-4 text-white text-sm">Uploading and processing...</p>
          </div>
        </div>
        <div v-if="pageState.isResult"
          class="flex items-center justify-center relative w-full h-[20rem] md:h-[29rem] max-h-[20rem] md:max-h-[29rem]">
          <NuxtImg
            :src="pageState.finalResult?.resultImageUrl"
            :title="pageState.finalResult?.id"
            class="h-auto sm:h-full object-contain rounded-lg"
            placeholder
          />
        </div>
      </div>

      <FileUpload v-model="state.sourceFiles" type="source" class="md:col-span-2 mb-4 md:mb-0" />
      <FileUpload v-model="state.targetFiles" type="target" class="md:col-span-2 mb-4 md:mb-0" />
    </div>

    <div class="w-full mt-4 md:mt-6 relative block">
      <button :disabled="pageState.isUpload" type="button"
        class="disabled:bg-slate-400 cursor-pointer w-full inline-flex items-center justify-center gap-x-1 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="fileUpload">
        <svg v-if="pageState.isUpload" class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>

        Upload & Start
        <Icon name="heroicons-solid:sparkles" class="text-xl" />
      </button>
    </div>
  </div>
</template>
