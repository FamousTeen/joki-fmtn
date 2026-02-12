// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Site URL for SEO
  site: {
    url: "https://fmtn-pilot.com",
    name: "FMTN's Pilot Service",
  },

  // Enable SSR for SEO and performance
  ssr: true,

  // Future-proofing for Nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  // App configuration
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "FMTN's Pilot Service | Game Boosting & Assistance",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Professional pilot services for Honkai: Star Rail, Zenless Zone Zero and more. Daily, weekly, and full patch assistance.",
        },
        { name: "theme-color", content: "#84cc16" },
        // Open Graph
        { property: "og:site_name", content: "FMTN's Pilot Service" },
        { property: "og:title", content: "FMTN's Pilot Service" },
        {
          property: "og:description",
          content:
            "Professional game pilot services for your favorite gacha games.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://fmtn-pilot.com" },
        {
          property: "og:image",
          content: "https://fmtn-pilot.com/og-image.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "FMTN's Pilot Service - Professional Game Boosting",
        },
        { property: "og:locale", content: "en_US" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "FMTN's Pilot Service" },
        {
          name: "twitter:description",
          content:
            "Professional game pilot services for your favorite gacha games.",
        },
        {
          name: "twitter:image",
          content: "https://fmtn-pilot.com/og-image.png",
        },
        // Additional SEO
        { name: "robots", content: "index, follow" },
        { name: "author", content: "FMTN" },
        {
          name: "keywords",
          content:
            "game pilot service, honkai star rail, zenless zone zero, game boosting, daily commission, gacha games",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://fmtn-pilot.com" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  // Modules
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
  ],

  // Schema.org configuration
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "FMTN's Pilot Service",
      url: "https://fmtn-pilot.com",
      logo: "https://fmtn-pilot.com/logo.png",
    },
  },

  // Sitemap configuration
  sitemap: {
    strictNuxtContentPaths: true,
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
    ],
  },

  // Tailwind configuration
  tailwindcss: {
    configPath: "tailwind.config.ts",
    cssPath: "~/assets/css/main.css",
    exposeConfig: true,
  },

  // Google Fonts
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
      Orbitron: [700, 800, 900],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      googleFormUrl:
        process.env.GOOGLE_FORM_URL || "https://forms.gle/your-form-id",
      instagramHandle: process.env.INSTAGRAM_HANDLE || "fmtn_pilot",
    },
  },

  // Nitro configuration for static generation
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
    compressPublicAssets: true,
  },

  // Experimental features
  experimental: {
    payloadExtraction: true,
    viewTransition: true,
  },

  // TypeScript strict mode
  typescript: {
    strict: true,
  },
});
