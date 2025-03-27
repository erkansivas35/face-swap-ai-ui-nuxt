<script setup>
import { ref, watch } from 'vue'
import { toast } from 'vue3-toastify'

const props = defineProps({
  modelValue: {
    type: [Object, null],
    required: true,
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['source', 'target'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue'])

const state = ref({
  fileViews: null,
})

const modelValue = ref(props.modelValue ?? null)

function onFileChange(e) {
  const selectedFiles = e.target.files || e.dataTransfer?.files;
  if (!selectedFiles || selectedFiles.length === 0) return;

  const file = selectedFiles[0];
  const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB

  if (file.size > maxSizeInBytes) {
    toast.error('File size exceeds 5 MB. Please upload a smaller file.');
    return;
  }

  imagesPreview(selectedFiles);
}

function imagesPreview(selectedFiles) {
  const reader = new FileReader();

  reader.onload = (event) => {
    let imageUrl = event.target.result;
    modelValue.value = selectedFiles[0];
    state.value.fileViews = { name: selectedFiles[0].name, path: imageUrl };
  };

  reader.onerror = () => {
    toast.warning('Error reading file');
    state.value.fileViews = null;
    modelValue.value = null;
  };

  reader.readAsDataURL(selectedFiles[0]);
}

function removeImage() {
  state.value.fileViews = null
  modelValue.value = null
}

watch(() => props.modelValue, (newValue) => {
  modelValue.value = newValue ?? null
  if (!newValue) {
    state.value.fileViews = null
  }
})

watch(modelValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <label for="uploadFileSource" type="button"
    class="relative block w-full max-h-[10rem] md:max-h-[14rem] overflow-hidden rounded-lg bg-slate-800 text-center"
    :class="[state.fileViews ?? 'p-12']">
    <div v-if="!state.fileViews" class="h-full cursor-pointer flex flex-col items-center justify-center">
      <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
      </svg>
      <span class="mt-2 block text-sm font-semibold">
        {{ props.type === 'source' ? 'Add Face Image' : 'Add Target Image' }}
      </span>

      <input id="uploadFileSource" hidden type="file" accept="image/jpeg,image/jpg,image/png"
        @change="e => onFileChange(e)">
    </div>

    <div v-else class="h-full">
      <img :src="state.fileViews.path" :title="state.fileViews.name" class="w-full h-full object-contain rounded-lg">
      <button
        class="absolute cursor-pointer inline-flex items-center justify-center gap-x-1 text-sm bottom-2 left-1/3 rounded-full btn-sm bg-slate-800 hover:bg-slate-600 px-4 py-2"
        @click="removeImage">
        <svg class="mx-auto size-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clip-rule="evenodd"></path>
        </svg>
        Change Image
      </button>
    </div>
  </label>
</template>
