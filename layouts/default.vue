<script setup>
const acceptCookieBanner = useCookie("accept_cookie", { maxAge: 60 * 60 * 24 * 7 });

const showUseCookieBanner = useState('showUseCookieBanner', () => (acceptCookieBanner.value?.showCookieBanner ?? true))

function handleAcceptCookie(isAccept) {
  showUseCookieBanner.value = false
  acceptCookieBanner.value = {
    accept: isAccept,
    showCookieBanner: false
  }
}
</script>

<template>
  <Header />
  <main class="w-full">
    <div class="relative max-w-5xl mx-auto py-4">
      <slot />

      <div v-if="showUseCookieBanner" class="fixed bottom-0 end-0 z-60 sm:max-w-xl mx-auto p-6">
        <!-- Card -->
        <div
          class="p-4 border border-gray-200 rounded-xl shadow-2xs bg-slate-950 dark:bg-slate-950 dark:border-gray-800">
          <div class="flex flex-col sm:flex-row sm:items-center gap-y-3 sm:gap-y-0 sm:gap-x-5">
            <div class="grow">
              <h2 class="text-gray-400">
                <span class="font-semibold text-gray-200">We use cookies</span> to analyze our traffic
                and create a smooth user experience.
              </h2>
            </div>
            <div class="inline-flex gap-x-2">
              <div>
                <button type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-white dark:hover:bg-slate-700 dark:focus:bg-slate-700"
                  @click="handleAcceptCookie(false)">
                  Reject
                </button>
              </div>
              <div>
                <button type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  @click="handleAcceptCookie(true)">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
  </main>
  <Footer />
</template>