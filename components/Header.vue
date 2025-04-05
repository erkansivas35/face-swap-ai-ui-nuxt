<script setup>
import { toast } from 'vue3-toastify'
import { useAuthStore } from '@/store/auth.js';

const user = useCookie("user");
const { logout } = useAuthStore();

const handleLogout = () => {
  logout()
  toast.success('Logout is successfully!')
  setTimeout(() => {
    navigateTo('/');
  }, 500);
};
</script>

<template>
  <header
    class="fixed flex flex-col top-0 left-0 py-4 px-4 md:px-0 bg-slate-950 dark:bg-slate-950 backdrop-blur-xl border-b border-slate-700 flex flex-wrap md:justify-start md:flex-nowrap z-20 w-full">
    <nav class="relative max-w-5xl w-full md:flex md:items-center md:justify-between md:gap-3 lg:mx-auto text-sm">
      <div class="w-full flex items-center justify-between">
        <NuxtLink to="/"
          class="flex items-center gap-x-4 text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
          aria-label="Brand">
          <NuxtImg src="/images/logo.png" width="40" height="40" class="h-auto sm:h-full object-contain rounded-lg"
            placeholder />
          <span>Easy AI Tools</span>
        </NuxtLink>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-slate-950 bg-slate-950 text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-slate-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example"
            aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
            <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span class="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
      <div id="hs-navbar-example"
        class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
        aria-labelledby="hs-navbar-example-collapse">
        <div class="block md:flex md:justify-center md:items-center md:gap-4">
          <div class="flex flex-col gap-1 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <NuxtLink to="/"
              class="px-2 sm:px-4 py-2 text-white font-medium rounded-md hover:bg-gray-700/50 hover:text-gray-200 focus:outline-hidden">
              Home
            </NuxtLink>
            <NuxtLink to="/face-swap"
              class="px-2 sm:px-4 py-2  text-white font-medium rounded-md hover:bg-gray-700/50 hover:text-gray-200 focus:outline-hidden">
              Face Swap Photo
            </NuxtLink>
          </div>
          <div class="mt-4 block sm:hidden">
            <div v-if="!user">
              <NuxtLink to="/auth/login" class="text-white font-medium focus:outline-hidden">
                Login
              </NuxtLink>
              /
              <NuxtLink to="/auth/register" class="text-white font-medium focus:outline-hidden">
                Register
              </NuxtLink>
            </div>
            <div v-else class="border-t border-gray-600 pt-3">
              <div class="px-2">Hello, 👋 {{ user.name ? user.name : user.email }}</div>

              <NuxtLink
                class="block mt-2 px-2 sm:px-4 py-2 text-white font-medium rounded-md hover:bg-gray-700/50 hover:text-gray-200 focus:outline-hidden"
                to="/auth/dashboard">
                Dashboard
              </NuxtLink>
              <button
                class="block w-full text-left px-2 sm:px-4 py-2 text-white font-medium rounded-md hover:bg-gray-700/50 hover:text-gray-200 focus:outline-hidden"
                @click="handleLogout">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden grow sm:block basis-full">
        <div class="block md:flex md:justify-end md:items-center md:gap-4">
          <div v-if="!user">
            <NuxtLink to="/auth/login" class="text-white font-medium focus:outline-hidden">
              Login
            </NuxtLink>
            /
            <NuxtLink to="/auth/register" class="text-white font-medium focus:outline-hidden">
              Register
            </NuxtLink>
          </div>
          <div v-else>
            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-with-header" type="button" class="hs-dropdown-toggle py-2 cursor-pointer"
                aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                Hello, 👋
                <span class="font-semibold">{{ user.name ? user.name : user.email }}</span>
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 shadow-md rounded-lg mt-2 bg-slate-950 dark:border dark:border-slate-700"
                role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-header">
                <div class="py-3 px-4 border-b border-gray-200 dark:border-slate-700">
                  <p class="text-sm text-gray-500 dark:text-neutral-400">Signed in as</p>
                  <p class="text-sm font-medium text-gray-800 dark:text-neutral-300">{{ user.email }}</p>
                </div>
                <div class="p-1 space-y-0.5">
                  <NuxtLink
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-slate-700 dark:hover:text-neutral-300 dark:focus:bg-slate-700"
                    to="/auth/dashboard">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Dashboard
                  </NuxtLink>
                  <button
                    class="w-full cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-slate-700 dark:hover:text-neutral-300 dark:focus:bg-slate-700"
                    @click="handleLogout">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>

                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
