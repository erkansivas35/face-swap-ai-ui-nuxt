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
    console.log(error)
    pageState.value.isResult = false
  }

  pageState.value.isUpload = false
}

const faqItems = useState('faqItems', () => ([
  {
    title: '',
    label: 'What is Face Swap?',
    icon: 'i-lucide-circle-help',
    content: 'Face Swap is an advanced AI-powered tool that allows users to seamlessly replace faces in photos or videos. This innovative technology uses specialized AI algorithms to deliver high-quality and realistic face swap results in just a few clicks.'
  },
  {
    title: '',
    label: 'Is Face Swap legal?',
    icon: 'i-lucide-circle-help',
    content: `Using face-swapping tools for personal content is completely legal, as long as you have the necessary permissions from the content owner. It’s important to use AI Face Swap responsibly and avoid creating illegal deepfakes or other inappropriate content.`
  },
  {
    title: '',
    label: 'How does AI Face Swap work?',
    icon: 'i-lucide-circle-help',
    content: `Our AI Face Swap tool leverages cutting-edge algorithms to replace faces in your chosen images seamlessly. By combining facial recognition, feature matching, and blending techniques, it ensures efficient and high-quality results every time.`
  },
  {
    title: '',
    label: 'Can I swap my face with any image?',
    icon: 'i-lucide-circle-help',
    content: `Yes, you can! With our face-swapping tool, you can easily replace your face with any image. Whether it’s swapping a male face with a female one or adding a creative effect, the possibilities are endless, allowing you to explore without limits.`
  },
  {
    title: '',
    label: 'Does AI Face Swap support gender swaps?',
    icon: 'i-lucide-circle-help',
    content: `Absolutely! Our tool includes AI-powered gender swap capabilities, enabling you to switch between male and female appearances effortlessly. Whether for fun or creative projects, the process is smooth and straightforward.`
  },
  {
    title: '',
    label: 'Is it safe to use Face Swap?',
    icon: 'i-lucide-circle-help',
    content: `Your safety and privacy are our top priorities. Any photos or data you upload are used solely for the face-swapping process and are deleted immediately afterward. You can use our tool with complete confidence.`
  },
  {
    title: '',
    label: 'How can I get the best results with Face Swap?',
    icon: 'i-lucide-circle-help',
    content: `To achieve the best results, use high-resolution photos for both the source and target images. Clear and sharp images with similar facial expressions will ensure better alignment and a more realistic face swap.`
  },
  {
    title: '',
    label: 'Can I swap faces between humans and animals?',
    icon: 'i-lucide-circle-help',
    content: `Unfortunately, our face-swapping tool is designed exclusively for human faces. It detects and aligns human facial features to deliver accurate and realistic results.`
  }
]))
</script>

<template>
  <div>
    <div class="mb-2 sm:mb-4 flex flex-col gap-2 sm:gap-6 px-8 py-2 sm:py-4">
      <h1 class="text-center text-2xl font-bold sm:text-5xl">Free AI Face Swap for Photos</h1>
      <h2 class="text-center text-sm sm:text-xl">Easily swap faces in photos for free.</h2>
    </div>

    <div>
      <div class="relative block md:grid md:grid-rows-2 md:grid-cols-6 md:grid-flow-col md:gap-4">
        <div
          class="mb-4 md:mb-0 md:row-span-2 md:col-span-4 w-full max-h-[20rem] md:max-h-[29rem] elative block overflow-hidden rounded-lg bg-slate-800 text-center">
          <div v-if="!pageState.isResult && !pageState.isUpload"
            class="h-full flex flex-col items-center justify-center">
            <NuxtImg src="/images/face-swap-example-result.jpg" title="Example Result" alt="Example Result"
              class="w-full object-contain rounded-lg" placeholder />
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
            <NuxtImg :src="pageState.finalResult?.resultImageUrl" :title="pageState.finalResult?.id"
              class="h-auto sm:h-full object-contain rounded-lg" placeholder />
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

    <div class="mt-10 sm:mt-20">
      <div class="block sm:grid grid-cols-12 items-center gap-x-10">
        <div class="order-2 col-span-4 h-100 mb-8 sm:mb-0">
          <NuxtImg src="/images/ai-face-swapping.jpg" title="AI Face Swapping" alt="AI Face Swapping"
            class="w-full h-full object-cover rounded-lg" placeholder />
          <div class="mt-1 text-xs text-gray-500">
            Photo by <a
              href="https://unsplash.com/@linusbelanger?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Linus
              Belanger</a> on <a
              href="https://unsplash.com/photos/a-blurry-photo-of-a-man-in-a-white-shirt-VCbptNMl6AU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </div>
        </div>
        <div class="order-1 col-span-8">
          <h2 class="text-sm sm:text-2xl font-semibold mb-3">Effortless, Fast, and Secure AI Face Swapping</h2>
          <p class="text-md">
            Easily transform your photos with our Easy AI Tools's AI-powered face-swapping tool. In just three simple
            steps, you can
            create stunning face swaps. Start by uploading the photo you want to modify. Then, upload the target photo
            for the swap. Finally, let our advanced AI handle the rest, delivering impressive results in seconds! Our
            tool ensures your creations are fully yours, keeping your data private and secure. Whether you're trying out
            new looks or having fun with friends, our AI face-swapping tool makes it effortless, fast, and secure to
            explore endless creative possibilities.
          </p>
        </div>
      </div>

      <div class="mt-10 sm:mt-30 block sm:grid grid-cols-12 items-center gap-x-10">
        <div class="order-1 col-span-5 h-100 mb-8 sm:mb-0">
          <NuxtImg src="/images/realistic-ai-face-swap.jpg" title="AI Face Swapping" alt="AI Face Swapping"
            class="w-full h-full object-cover rounded-lg" placeholder />
          <div class="mt-1 text-xs text-right text-gray-500">
            Photo by <a
              href="https://unsplash.com/@robertpiosik?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Robert
              Piosik</a> on <a
              href="https://unsplash.com/photos/woman-with-brown-hair-and-black-eyes-zmIdvCZvXgs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </div>
        </div>
        <div class="order-2 col-span-7">
          <h2 class="text-sm sm:text-2xl font-semibold mb-3">Achieve Realistic and Flawless Results</h2>
          <p class="text-md">
            Unlock professional-level editing with our Easy AI Tools's Face Swap tool, crafted to deliver smooth
            blending and
            lifelike transformations. Powered by advanced AI technology, every face swap is designed to look natural and
            authentic. Whether you're creating a fun photo or experimenting with a new look, our tool ensures precise
            face swaps that seamlessly integrate with the original image, making it nearly impossible to spot the
            difference. Say goodbye to tedious hours of manual blending and masking—our tool makes achieving realistic
            results effortless.
          </p>
        </div>
      </div>

      <div class="mt-10 sm:mt-30">
        <span class="text-sm">Frequently Asked Question</span class="text-sm">
        <h2 class="text-xl font-bold mt-1 mb-4">Do you have a Question?</h2>
        <UAccordion :items="faqItems" labelKey="title" type="multiple">
          <template #leading="{ item }">
            <span class="text-base font-bold">{{ item.label }}</span>
          </template>
          <template #body="{ item }">
            <span class="text-sm text-gray-400">{{ item.content }}</span>
          </template>
        </UAccordion>
      </div>
    </div>
  </div>
</template>
