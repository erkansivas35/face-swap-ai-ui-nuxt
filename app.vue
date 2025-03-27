// <script setup>
// import DefaultLayout from '@/layouts/DefaultLayout.vue'
// import { computed, onMounted } from 'vue'
// import { useRoute } from 'vue-router'

// const route = useRoute()
// const layout = computed(() => route.meta.layout || DefaultLayout)

// onMounted(() => {
//   setTimeout(() => window.HSStaticMethods.autoInit(), 100)

//   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//   document.documentElement.classList.toggle(
//     'dark',
//     localStorage.theme === 'dark' ||
//     (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
//   )
//   // Whenever the user explicitly chooses light mode
//   // localStorage.theme = "light";
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
//   // Whenever the user explicitly chooses to respect the OS preference
//   // localStorage.removeItem("theme");
// })
// </script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>