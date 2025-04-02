<script setup>
import FaceSwapHistory from '@/components/dashboard/FaceSwapHistory'

definePageMeta({
  middleware: 'auth'
});

const items = ref([
  {
    label: 'History',
    slot: 'history'
  },
  {
    label: 'Account Settings (Coming soon!)',
    slot: 'account-settings',
    disabled: true
  }
]);

</script>

<template>
  <div>
    <UTabs variant="link" :items="items" class="gap-4 items-start w-full"
      :ui="{ trigger: 'flex-1 text-sm ', content: 'py-6' }">
      <template #history>
        <FaceSwapHistory />
      </template>

      <template #account-settings="{ item }">
        <p class="mb-4">
          {{ item.label }}
        </p>
      </template>
    </UTabs>
  </div>
</template>