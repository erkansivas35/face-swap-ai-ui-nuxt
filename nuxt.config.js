export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app: {
    head: {
      title: 'Free Face Swap AI - Online (No Signup)',
      meta: [
        { name: 'description', content: 'Free AI Face Swap for Photos, Easily swap faces in photos for free. No Signup required.' },
        { name: 'keywords', content: 'face swap, face swap online, face swap ai, face swap photos, face swap free, face swap no signup' },
        { name: 'author', content: 'EasyAiTools.xyz' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'bingbot', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'google-adsense-account', content: 'ca-pub-5724639008387317' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XRT6F61LK6', async: true },
        { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5724639008387317', async: true, crossorigin: 'anonymous' },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XRT6F61LK6');
          `,
        },
      ],
    },
  },
  css: ['@/assets/style.css'],
})