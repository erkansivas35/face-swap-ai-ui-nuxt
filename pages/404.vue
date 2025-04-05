<template>
  <section class="flex flex-col py-20">
    <div>
      <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
        <p class="mt-3 text-gray-600 dark:text-neutral-400">Oops, something went wrong.</p>
        <p class="text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p>
        <div class="mt-8 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <NuxtLink
            class="inline-flex items-center justify-center gap-x-1 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            to="/">
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to home page
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
