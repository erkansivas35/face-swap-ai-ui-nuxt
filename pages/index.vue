<script setup>
</script>

<template>
  <!-- Hero -->
  <div>
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
      <!-- Announcement Banner -->
      <!-- <div class="flex justify-center">
        <a class="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-hidden focus:bg-white/10"
          href="#">
          <p class="me-2 text-white text-sm">
            Preline UI Figma is live.
          </p>
          <span
            class="group-hover:bg-white/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </a>
      </div> -->
      <!-- End Announcement Banner -->

      <!-- Title -->
      <div class="max-w-3xl text-center mx-auto">
        <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Unlock the Power of AI
        </h1>
      </div>
      <!-- End Title -->

      <div class="max-w-3xl text-center mx-auto">
        <p class="text-lg text-white/70">Experience seamless and intuitive AI-powered tools designed for everyone.</p>
      </div>

      <!-- Buttons -->
      <div class="text-center">
        <NuxtLink
          class="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6"
          to="/face-swap">
          Explore Face Swap Tools
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </NuxtLink>
      </div>
      <!-- End Buttons -->
    </div>
  </div>
  <!-- End Hero -->

  <!-- Features -->
  <div class="py-10 lg:py-14">
    <!-- Grid -->
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-8 xl:gap-12">
      <div>
        <NuxtImg src="/images/face-swap-example-result.jpg" title="Example Result" alt="Example Result"
          class="w-full h-full rounded-xl" placeholder />
      </div>
      <!-- End Col -->

      <div class="mt-5 sm:mt-10 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <!-- Title -->
          <div class="space-y-2 md:space-y-4">
            <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
              Free AI Face Swap for Photos
            </h2>
            <p class="text-gray-500 dark:text-neutral-500">
              Easily swap faces in photos with our advanced AI technology. Create fun and realistic face swaps in
              seconds.
            </p>
          </div>
          <!-- End Title -->

          <NuxtLink to="/face-swap"
            class="inline-flex items-center justify-center gap-x-1 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Try Face Swap Now!
            <Icon name="heroicons-solid:sparkles" class="text-xl" />
          </NuxtLink>
        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Features -->

  <!-- About Us -->
  <div class="py-10 lg:py-20">
    <h2 class="mb-4 font-semibold text-2xl md:text-4xl md:leading-tight">About Easy AI Tools</h2>
    <p class="mt-1 text-neutral-400">At Easy AI Tools, our mission is to make powerful AI tools simple, accessible, and
      useful for everyone. We believe that artificial intelligence should empower creativity, productivity, and
      fun—without requiring technical expertise.
    </p>

    <div class="mt-6">
      <NuxtLink to="/about"
        class="inline-flex items-center justify-center gap-x-1 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        About Us
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </NuxtLink>
    </div>
  </div>
  <!-- About Us -->

  <!-- Subscribe -->
  <!-- <div class="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
    <div class="max-w-xl text-center mx-auto">
      <div class="mb-5">
        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Sign up to our newsletter</h2>
      </div>

      <form>
        <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div class="w-full">
            <label for="hero-input" class="sr-only">Search</label>
            <UFormField name="email">
              <input type="email" id="email" name="email" placeholder="Enter your email"
                class="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            </UFormField>
          </div>
          <a class="inline-flex items-center justify-center gap-x-1 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="#">
            Subscribe
          </a>
        </div>
      </form>
    </div>
  </div> -->
  <!-- End Subscribe -->
</template>
