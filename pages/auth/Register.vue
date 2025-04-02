<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth.js';
import { authService } from '@/api/services/authService.js'
import { toast } from 'vue3-toastify'
import * as v from 'valibot'

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

const { login } = useAuthStore();

const service = authService

const pageState = ref({
  isLoading: false,
})

const formData = ref({
  email: '',
  password: '',
})

const token = ref(null)

const handleRegister = async () => {
  try {
    pageState.value.isLoading = true

    // Verify Turnstile Token
    const validTokenResult = await service.verifyTurnstileToken(token.value);

    if (!validTokenResult?.data?.success) {
      toast.error('Invalid Turnstile verification. Please try again.');
      pageState.value.isLoading = false;
      return;
    }

    const res = await service.register(formData.value)
    login(res);

    toast.success('Sing up is successfully!')
    navigateTo('/');
  } catch (error) {
    formData.value = { ...formData.value }
    pageState.value.isLoading = false
  }
};
</script>

<template>
  <div
    class="mt-4 max-w-2xl mx-auto border border-gray-200 rounded-xl shadow-2xs bg-slate-950 dark:bg-slate-950 dark:border-neutral-700">
    <div class="p-4 sm:p-7">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Register</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          Already have an account?
          <NuxtLink to="/auth/login"
            class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500">
            Sign in here
          </NuxtLink>
        </p>
      </div>

      <div class="mt-6">
        <!-- Form -->
        <UForm :schema="schema" :state="formData" class="space-y-4" @submit.prevent="handleRegister">
          <div class="grid gap-y-4">
            <UFormField label="Email address" name="email" class="block text-sm mb-2 dark:text-white">
              <input v-model="formData.email" type="email" id="email" name="email"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-950 dark:bg-slate-950 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            </UFormField>

            <UFormField label="Password" name="password" class="block text-sm mb-2 dark:text-white">
              <input v-model="formData.password" type="password" id="password" name="password"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-950 dark:bg-slate-950 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            </UFormField>

            <!-- Checkbox -->
            <div class="flex items-center">
              <div class="flex">
                <input id="remember-me" name="remember-me" type="checkbox"
                  class="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
              </div>
              <div class="ms-3">
                <label for="remember-me" class="text-sm dark:text-white">I accept the <a
                    class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                    href="#">Terms and Conditions</a></label>
              </div>
            </div>
            <!-- End Checkbox -->

            <NuxtTurnstile v-model="token" />

            <button :disabled="pageState.isLoading" type="submit"
              class="disabled:bg-slate-400 cursor-pointer w-full inline-flex items-center justify-center gap-x-1 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign up
              <svg v-if="pageState.isLoading" class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            </button>
          </div>
        </UForm>
        <!-- End Form -->
      </div>
    </div>
  </div>
</template>