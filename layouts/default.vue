<script setup>
const items = [
  [
    {
      label: 'Face Swap Photo',
      to: '/',
    },
  ],
  [
    {
      label: 'Easy AI Tools All Copyright Reserved @ 2025',
      class: 'hover:text-neutral'
    },
    {
      label: '|',
      class: 'hover:text-neutral'
    },
    {
      label: 'Contact',
      to: 'mailto:erkan@erkansivas.xyz'
    },
  ],
]
</script>

<template>
  <div>
    <main>
      <div class="w-full">
        <Header />
        <div class="relative max-w-screen-lg mx-auto p-4">
          <slot />
        </div>
      </div>
    </main>

    <footer class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-slate-950 text-sm py-2 dark:bg-slate-800">
      <div class="w-full max-w-screen-lg mx-auto px-4">
        <UNavigationMenu color="neutral" :items="items" class="w-full" />
      </div>
    </footer>
  </div>
</template>