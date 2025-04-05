import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "dayjs-nuxt",
    "@nuxtjs/turnstile",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  turnstile: {
    siteKey: "0x4AAAAAABDhOP4zffpsybhz",
  },
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_BASE_API_URL: process.env.NUXT_PUBLIC_BASE_API_URL,
      NUXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
    },
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
  },
  routeRules: {
    // Admin dashboard renders only on client-side
    "/auth/**": { ssr: false },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
  app: {
    head: {
      title: "Free Easy AI Tools - Online (No Signup)",
      meta: [
        {
          name: "description",
          content: "Free AI Face Swap for Photos, Easily swap faces in photos for free. No Signup required.",
        },
        {
          name: "keywords",
          content:
            "easy ai tools, face swap, face swap online, face swap ai, face swap for photos, face swap free, face swap no signup",
        },
        { name: "author", content: "EasyAiTools.xyz" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "bingbot", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "google-adsense-account", content: "ca-pub-5724639008387317" },
      ],
      link: [{ rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=G-XRT6F61LK6", async: true },
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5724639008387317",
          async: true,
          crossorigin: "anonymous",
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XRT6F61LK6');
          `,
        },
      ],
      bodyAttrs: {
        class:
          "relative flex flex-col px-4 md:px-0 pt-[5rem] bg-linear-to-b from-violet-600/10 via-transparent text-neutral-50",
      },
    },
  },
  css: ["@/assets/style.css"],
  site: {
    url: "https://easyaitools.xyz",
    name: "Free Easy AI Tools - Online (No Signup)",
  },
  sitemap: {
    xsl: false,
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
  },
  dayjs: {
    locales: ["en"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: [
      "en",
      {
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few secondses",
          m: "a minute",
          mm: "%d minuteses",
          h: "an hour",
          hh: "%d hourses",
          d: "a day",
          dd: "%d dayses",
          M: "a month",
          MM: "%d monthseses",
          y: "a year",
          yy: "%d yearseses",
        },
      },
    ],
    defaultTimezone: "Europe/Istanbul",
  },
});
