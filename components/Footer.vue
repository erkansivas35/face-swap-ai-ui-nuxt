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
      class: 'hover:text-neutral hover:bg-slate-900'
    },
    {
      label: '|',
      class: 'hover:text-neutral hover:bg-slate-900'
    },
    {
      label: 'Contact',
      to: 'mailto:erkan@erkansivas.xyz'
    },
  ],
]
</script>

<template>
  <footer class="w-full max-w-5xl mx-auto text-sm py-8 px-4 md:px-4 lg:px-0">
    <div class="pt-5 mt-5 border-t border-neutral-700">
      <UNavigationMenu color="neutral" :items="items" variant="link" class="w-full" />
    </div>
  </footer>
</template>