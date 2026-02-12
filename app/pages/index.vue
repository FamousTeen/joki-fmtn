<!-- pages/index.vue -->
<template>
    <div>
        <!-- Hero Section -->
        <HeroBanner badge="Professional Gaming Services" title-prefix="FMTN's" title-highlight="Pilot Service"
            description="Expert pilot services for your favorite gacha games. Daily commissions, weekly bosses, and full patch assistance — all handled with care."
            :primary-cta-text="'Order Now'" :show-order-modal="true" secondary-cta-text="View Services"
            secondary-cta-url="#services" :show-game-selector="true" :games="games" />

        <!-- Why Choose Us Section -->
        <section class="section bg-surface-900" aria-labelledby="features-title">
            <div class="container-wide">
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <span class="badge-primary mb-4">Why Choose Us</span>
                    <h2 id="features-title" class="text-3xl md:text-4xl font-bold font-display mb-4">
                        Trusted by Players
                    </h2>
                    <p class="text-surface-400 text-lg">
                        We prioritize security, communication, and results.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="feature in features" :key="feature.title" class="card p-6 text-center">
                        <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                            <div class="text-primary" v-html="feature.icon" />
                        </div>
                        <h3 class="font-semibold text-surface-50 mb-2">{{ feature.title }}</h3>
                        <p class="text-surface-400 text-sm">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <TestimonialsGallery badge="Happy Clients" title="What Players Say"
            subtitle="Real feedback from real players who trust our service." :testimonials="testimonials" />

        <!-- CTA Section -->
        <section class="section bg-surface-950 relative overflow-hidden">
            <!-- Background effects -->
            <div class="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 rounded-full blur-3xl"
                aria-hidden="true" />

            <div class="container-narrow relative z-10 text-center">
                <h2 class="text-3xl md:text-4xl font-bold font-display mb-4">
                    Ready to Level Up?
                </h2>
                <p class="text-surface-400 text-lg max-w-xl mx-auto mb-8">
                    Let us handle the grind while you enjoy the rewards. Place your order today and experience
                    professional pilot service.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <button type="button" @click="isGameModalOpen = true"
                        class="btn-primary text-lg px-8 py-4 animate-glow-pulse">
                        Order Now
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    <a :href="`https://instagram.com/${instagramHandle}`" target="_blank" rel="noopener noreferrer"
                        class="btn-secondary text-lg px-8 py-4">
                        Follow Us
                    </a>
                </div>

                <!-- Game Select Modal -->
                <GameSelectModal :is-open="isGameModalOpen" @close="isGameModalOpen = false" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
    title: "FMTN's Pilot Service | Professional Game Boosting",
    description: 'Expert pilot services for Honkai: Star Rail, Zenless Zone Zero and more. Daily, weekly, and full patch assistance.',
    ogTitle: "FMTN's Pilot Service | Professional Game Boosting",
    ogDescription: 'Professional game pilot services for your favorite gacha games.',
    ogType: 'website',
    ogUrl: 'https://fmtn-pilot.vercel.app',
    ogImage: 'https://fmtn-pilot.vercel.app/og-image.png',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterCard: 'summary_large_image',
    twitterTitle: "FMTN's Pilot Service | Professional Game Boosting",
    twitterDescription: 'Professional game pilot services for your favorite gacha games.',
    twitterImage: 'https://fmtn-pilot.vercel.app/og-image.png',
})

// Canonical URL
useHead({
    link: [
        { rel: 'canonical', href: 'https://fmtn-pilot.vercel.app' }
    ]
})

// JSON-LD Structured Data
useSchemaOrg([
    defineOrganization({
        name: "FMTN's Pilot Service",
        url: 'https://fmtn-pilot.vercel.app',
        logo: 'https://fmtn-pilot.vercel.app/logo.png',
        sameAs: [
            'https://instagram.com/jokibyfmtn',
            'https://t.me/FamousTeen',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['English', 'Indonesian'],
        },
    }),
    defineWebSite({
        name: "FMTN's Pilot Service",
        url: 'https://fmtn-pilot.vercel.app',
    }),
    defineWebPage({
        '@type': 'WebPage',
        name: "FMTN's Pilot Service | Professional Game Boosting",
        description: 'Expert pilot services for Honkai: Star Rail, Zenless Zone Zero and more.',
    }),
])

const config = useRuntimeConfig()
const instagramHandle = "jokibyfmtn"

// Modal state
const isGameModalOpen = ref(false)

// Games data
const games = [
    { id: 'hsr', name: 'Honkai: Star Rail', slug: 'honkai-star-rail', icon: '~/assets/Honkai_Star_Rail_Icon.png' },
    { id: 'zzz', name: 'Zenless Zone Zero', slug: 'zenless-zone-zero', icon: '~/assets/ZZZ_Icon.png' },
    { id: 'soon', name: 'Coming Soon', slug: 'coming-soon' },
]

// Features data
const features = [
    {
        title: 'Secure & Private',
        description: 'Your account credentials are handled with strict confidentiality.',
        icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>',
    },
    {
        title: 'On-time Delivery',
        description: 'Most services completed within 24 hours, weekly and patch services on schedule.',
        icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    },
    {
        title: 'Reliable Proof',
        description: 'Completion screenshots sent after every service for full transparency.',
        icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
    },
    {
        title: 'Solo-Operated',
        description: 'Handled personally by the owner — no workers involved, ensuring quality control.',
        icon: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',
    },
]

// Testimonials data
const testimonials = [
    {
        quote: 'Amazing service! They cleared all the content I was stuck on. Very professional communication throughout.',
        author: 'Divine',
        rating: 5,
        game: 'Honkai: Star Rail',
        service: 'Full Patch Package',
    },
    {
        quote: 'Best pilot service I have used. Reasonable prices and they always deliver on time.',
        author: 'Tasha Godspell',
        rating: 5,
        game: 'Zenless Zone Zero',
        service: 'Full Patch Package',
    },
    {
        quote: 'Trusted them with my account for a month now. Always secure and great progress every time.',
        author: 'Mimic',
        rating: 4,
        game: 'Honkai: Star Rail',
        service: 'Full Patch Package',
    },
    {
        quote: 'Quick responses, fair pricing, and excellent results. Highly recommend!',
        author: 'Tekashi',
        rating: 4,
        game: 'Zenless Zone Zero',
        service: 'Side Quests Package',
    },
    {
        quote: 'Finally found a reliable pilot service. They explain everything and keep you updated.',
        author: 'Francisco',
        rating: 5,
        game: 'Zenless Zone Zero',
        service: 'Weekly Package',
    },
    {
        quote: 'Professional and efficient. They handled all my dailies and weekly bosses without any issues.',
        author: 'Gwyn(Fiver)',
        rating: 5,
        game: 'Zenless Zone Zero',
        service: 'Full Patch Package',
    }
]
</script>
