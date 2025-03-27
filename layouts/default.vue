<script setup>
import Header from "@/components/Header.vue"
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
  </div>
</template>