import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/ui", "@nuxtjs/sitemap", "@nuxtjs/robots"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    },
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
      title: "Free Face Swap AI - Online (No Signup)",
      meta: [
        {
          name: "description",
          content: "Free AI Face Swap for Photos, Easily swap faces in photos for free. No Signup required.",
        },
        {
          name: "keywords",
          content: "face swap, face swap online, face swap ai, face swap photos, face swap free, face swap no signup",
        },
        { name: "author", content: "EasyAiTools.xyz" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "bingbot", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "google-adsense-account", content: "ca-pub-5724639008387317" },
      ],
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
        class: "relative flex flex-col bg-slate-900 text-neutral-50",
      },
    },
  },
  css: ["@/assets/style.css"],
  site: {
    url: "https://easyaitools.xyz",
    name: "Free Face Swap AI - Online (No Signup)",
  },
});
