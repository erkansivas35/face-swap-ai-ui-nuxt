<script setup></script>

<template>
  <header
    class="fixed flex flex-col top-0 left-0 py-4 bg-slate-950 dark:bg-slate-950 backdrop-blur-xl border-b border-neutral-700 flex flex-wrap md:justify-start md:flex-nowrap z-20 w-full">
    <nav class="relative max-w-5xl w-full md:flex md:items-center md:justify-between md:gap-3 px-4 lg:mx-auto text-sm">
      <div class="w-full flex items-center justify-between">
        <a class="flex items-center gap-x-4 text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#"
          aria-label="Brand">
          <NuxtImg
            src="/images/logo.png"
            width="40"
            height="40"
            class="h-auto sm:h-full object-contain rounded-lg"
            placeholder
          />
          <span>Easy AI Tools</span>
        </a>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-slate-950 bg-slate-950 text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
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
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <NuxtLink to="/" class="text-white font-medium focus:outline-hidden">
            Face Swap Photo
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
