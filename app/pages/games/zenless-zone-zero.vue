<!-- pages/games/zenless-zone-zero.vue -->
<template>
    <div>
        <!-- Hero Section -->
        <HeroBanner badge="Zenless Zone Zero" title-prefix="Zenless Zone Zero" game-id="zzz"
            title-highlight="Pilot Service"
            description="Navigate New Eridu with confidence. From daily commissions to Shiyu Defense and Hollow Zero, we handle the grind so you can enjoy the style."
            :primary-cta-text="'Order Now'" :primary-cta-url="googleFormUrl" :primary-cta-external="true"
            secondary-cta-text="View Packages" secondary-cta-url="#services" :show-game-selector="false"
            bg-class="bg-gradient-to-br from-surface-950 via-orange-950/20 to-surface-950" />

        <!-- Game-specific Services -->
        <ItemList section-id="services" badge="ZZZ Services" title="Zenless Packages"
            subtitle="Specialized services for Zenless Zone Zero Proxies. All endgame modes included."
            :services="zzzServices" info-title="Custom Requests?"
            info-description="Need help with specific challenges, commissions or agent builds? Reach out for personalized service."
            info-cta-text="Contact for Custom" :show-contact-modal="true"
            @open-contact-modal="isContactModalOpen = true" />

        <!-- Contact Modal -->
        <ContactModal :is-open="isContactModalOpen" @close="isContactModalOpen = false" />

        <!-- What's Included Section - Full Pricelist -->
        <section class="section bg-surface-900" aria-labelledby="pricelist-title">
            <div class="container-wide">
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <span class="badge-accent mb-4">Full Pricelist</span>
                    <h2 id="pricelist-title" class="text-3xl md:text-4xl font-bold font-display mb-4">
                        Service Pricing
                    </h2>
                    <p class="text-surface-400 text-lg">
                        Detailed pricing for all Zenless Zone Zero services.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Main Quest -->
                    <div class="card overflow-hidden lg:col-span-2">
                        <div class="bg-blue-500/20 px-6 py-4 border-b border-surface-800">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">📖</span>
                                <h3 class="font-bold text-surface-50 text-lg">Main Quest</h3>
                            </div>
                        </div>
                        <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                            <div v-for="item in pricelistMainQuest" :key="item.name"
                                class="flex justify-between items-start gap-4 py-2 border-b border-surface-800/50 last:border-0">
                                <div class="flex-1">
                                    <p class="text-surface-200 text-sm font-medium">{{ item.name }}</p>
                                    <p v-if="item.note" class="text-surface-500 text-xs mt-0.5">{{ item.note }}</p>
                                </div>
                                <div class="text-right">
                                    <span class="text-primary font-semibold text-sm whitespace-nowrap">Rp {{
                                        formatPrice(item.price) }}</span>
                                    <p v-if="item.priceUsd" class="text-surface-500 text-xs">~${{ item.priceUsd }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Endgame Content -->
                    <div class="card overflow-hidden">
                        <div class="bg-red-500/20 px-6 py-4 border-b border-surface-800">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">⚔️</span>
                                <h3 class="font-bold text-surface-50 text-lg">Endgame Content</h3>
                            </div>
                        </div>
                        <div class="p-6 space-y-3">
                            <div v-for="item in pricelistEndgame" :key="item.name"
                                class="flex justify-between items-start gap-4 py-2 border-b border-surface-800/50 last:border-0">
                                <div class="flex-1">
                                    <p class="text-surface-200 text-sm font-medium">{{ item.name }}</p>
                                    <p v-if="item.note" class="text-surface-500 text-xs mt-0.5">{{ item.note }}</p>
                                </div>
                                <div class="text-right">
                                    <span class="text-primary font-semibold text-sm whitespace-nowrap">Rp {{
                                        formatPrice(item.price) }}</span>
                                    <p v-if="item.priceUsd" class="text-surface-500 text-xs">~${{ item.priceUsd }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Events -->
                    <div class="card overflow-hidden">
                        <div class="bg-accent/20 px-6 py-4 border-b border-surface-800">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">🎉</span>
                                <h3 class="font-bold text-surface-50 text-lg">Events</h3>
                            </div>
                        </div>
                        <div class="p-6 space-y-3">
                            <div v-for="item in pricelistEvents" :key="item.name"
                                class="flex justify-between items-start gap-4 py-2 border-b border-surface-800/50 last:border-0">
                                <div class="flex-1">
                                    <p class="text-surface-200 text-sm font-medium">{{ item.name }}</p>
                                    <p v-if="item.note" class="text-surface-500 text-xs mt-0.5">{{ item.note }}</p>
                                </div>
                                <div class="text-right">
                                    <span class="text-primary font-semibold text-sm whitespace-nowrap">Rp {{
                                        formatPrice(item.price) }}</span>
                                    <p v-if="item.priceUsd" class="text-surface-500 text-xs">~${{ item.priceUsd }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Commissions & Quests -->
                    <div class="card overflow-hidden">
                        <div class="bg-purple-500/20 px-6 py-4 border-b border-surface-800">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">📋</span>
                                <h3 class="font-bold text-surface-50 text-lg">Commissions & Quests</h3>
                            </div>
                        </div>
                        <div class="p-6 space-y-3">
                            <div v-for="item in pricelistCommissions" :key="item.name"
                                class="flex justify-between items-start gap-4 py-2 border-b border-surface-800/50 last:border-0">
                                <div class="flex-1">
                                    <p class="text-surface-200 text-sm font-medium">{{ item.name }}</p>
                                    <p v-if="item.note" class="text-surface-500 text-xs mt-0.5">{{ item.note }}</p>
                                </div>
                                <div class="text-right">
                                    <span class="text-primary font-semibold text-sm whitespace-nowrap">Rp {{
                                        formatPrice(item.price) }}</span>
                                    <p v-if="item.priceUsd" class="text-surface-500 text-xs">~${{ item.priceUsd }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Character & Account -->
                    <div class="card overflow-hidden">
                        <div class="bg-primary/20 px-6 py-4 border-b border-surface-800">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">👤</span>
                                <h3 class="font-bold text-surface-50 text-lg">Character & Account</h3>
                            </div>
                        </div>
                        <div class="p-6 space-y-3">
                            <div v-for="item in pricelistCharacter" :key="item.name"
                                class="flex justify-between items-start gap-4 py-2 border-b border-surface-800/50 last:border-0">
                                <div class="flex-1">
                                    <p class="text-surface-200 text-sm font-medium">{{ item.name }}</p>
                                    <p v-if="item.note" class="text-surface-500 text-xs mt-0.5">{{ item.note }}</p>
                                </div>
                                <div class="text-right">
                                    <span class="text-primary font-semibold text-sm whitespace-nowrap">Rp {{
                                        formatPrice(item.price) }}</span>
                                    <p v-if="item.priceUsd" class="text-surface-500 text-xs">~${{ item.priceUsd }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Note -->
                <div class="mt-8 p-4 rounded-xl bg-surface-800/50 border border-surface-700">
                    <p class="text-surface-400 text-sm text-center">
                        💡 Shiyu Defense & Deadly Assault includes refund guarantee based on completion ranking.
                    </p>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="section bg-surface-900" aria-labelledby="faq-title">
            <div class="container-narrow">
                <div class="text-center mb-12">
                    <span class="badge-accent mb-4">FAQ</span>
                    <h2 id="faq-title" class="text-3xl md:text-4xl font-bold font-display mb-4">
                        Common Questions
                    </h2>
                </div>

                <div class="space-y-4">
                    <details v-for="(faq, index) in faqs" :key="index" class="group card overflow-hidden">
                        <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                            <span class="font-medium text-surface-50">{{ faq.question }}</span>
                            <svg class="w-5 h-5 text-surface-400 transition-transform duration-200 group-open:rotate-180"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <div class="px-6 pb-6 text-surface-400">
                            {{ faq.answer }}
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section bg-surface-950">
            <div class="container-narrow text-center">
                <h2 class="text-3xl font-bold font-display mb-4">
                    Ready to Explore New Eridu?
                </h2>
                <p class="text-surface-400 mb-8 max-w-xl mx-auto">
                    Let us navigate the Hollows while you enjoy the story and style of ZZZ.
                </p>
                <a :href="googleFormUrl" target="_blank" rel="noopener noreferrer"
                    class="btn-primary text-lg px-8 py-4">
                    Order ZZZ Service
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Zenless Zone Zero Pilot Service | FMTN',
    description: 'Professional ZZZ pilot service. Daily commissions, Hollow Zero, Shiyu Defense, and all endgame content.',
    ogTitle: 'Zenless Zone Zero Pilot Service | FMTN',
    ogDescription: 'Professional ZZZ pilot service. Daily commissions, Hollow Zero, Shiyu Defense, and all endgame content.',
    ogType: 'website',
    ogUrl: 'https://fmtn-pilot.vercel.app/games/zenless-zone-zero',
    ogImage: 'https://fmtn-pilot.vercel.app/og-zzz.png',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Zenless Zone Zero Pilot Service | FMTN',
    twitterDescription: 'Professional ZZZ pilot service. Daily commissions, Hollow Zero, Shiyu Defense, and all endgame content.',
    twitterImage: 'https://fmtn-pilot.vercel.app/og-zzz.png',
})

// Canonical URL
useHead({
    link: [
        { rel: 'canonical', href: 'https://fmtn-pilot.vercel.app/games/zenless-zone-zero' }
    ]
})

// JSON-LD Structured Data for ZZZ Service
useSchemaOrg([
    defineWebPage({
        '@type': 'WebPage',
        name: 'Zenless Zone Zero Pilot Service',
        description: 'Professional ZZZ pilot service. Daily commissions, Hollow Zero, Shiyu Defense, and all endgame content.',
    }),
    {
        '@type': 'Service',
        name: 'Zenless Zone Zero Pilot Service',
        description: 'Professional pilot service for Zenless Zone Zero including daily commissions, Hollow Zero, Shiyu Defense, and all endgame content.',
        provider: {
            '@type': 'Organization',
            name: "FMTN's Pilot Service",
            url: 'https://fmtn-pilot.vercel.app',
        },
        areaServed: 'Worldwide',
        serviceType: 'Game Pilot Service',
    },
])

const config = useRuntimeConfig()
const googleFormUrl = config.public.zzzFormUrl as string

// Contact modal state
const isContactModalOpen = ref(false)

// ZZZ-specific services
const zzzServices = [
    {
        id: 'zzz-daily',
        variant: 'daily' as const,
        title: 'Daily Proxy',
        description: 'Daily tasks and battery management for busy Proxies.',
        price: 5000,
        priceUsd: 0.85,
        pricePeriod: 'day',
        features: [
            'Daily errands',
            'Battery usage',
            'Scratch card',
            'Drink Coffee',
            'Video store run',
            'Progress screenshots',
        ],
        ctaUrl: googleFormUrl,
    },
    {
        id: 'zzz-weekly',
        variant: 'weekly' as const,
        title: 'Weekly Run',
        description: 'Complete weekly coverage including Hollow Zero and Notorious Hunts.',
        price: 30000,
        priceUsd: 5,
        originalPrice: 35000,
        originalPriceUsd: 6,
        discount: 16,
        pricePeriod: 'week',
        features: [
            'Everything in Daily',
            'Hollow Zero completion',
            'Weekly quest',
            'Notorious Hunts'
        ],
        ctaUrl: googleFormUrl,
    },
    {
        id: 'zzz-patch',
        variant: 'patch' as const,
        title: 'Full Patch',
        description: 'Complete patch cycle with all new content and events.',
        price: 180000,
        priceUsd: 25,
        originalPrice: 225000,
        originalPriceUsd: 32,
        discount: 25,
        pricePeriod: 'patch',
        features: [
            'Everything in Weekly',
            'All patch events',
            'Agent building (max 2 if with additional fuel/Reversed Trailblaze Power)',
            'Drive Disc optimization',
            'Endgame content (Shiyu Defense, Deadly Assault)'
        ],
        isPopular: true,
        ctaUrl: googleFormUrl,
    },
]

// Price formatter
const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price
    return new Intl.NumberFormat('id-ID').format(price)
}

// Pricelist - Main Quest
const pricelistMainQuest = [
    { name: 'Full Prologue', price: 30000, priceUsd: '5.6', note: null },
    { name: 'Full Chapter 1', price: 30000, priceUsd: '5.6', note: 'Rank up quest excluded, Inter-Knot Lv.20 needed' },
    { name: 'Full Chapter 2', price: 35000, priceUsd: '6.5', note: 'Inter-Knot Lv.34 needed (Obbservation data requirement excluded)' },
    { name: 'Full Chapter 3', price: 25000, priceUsd: '4.7', note: 'Inter-Knot Lv.36 needed' },
    { name: 'Special Episode (Jane Doe)', price: 20000, priceUsd: '3.75', note: null },
    { name: 'Full Chapter 4', price: 25000, priceUsd: '4.7', note: null },
    { name: 'Special Episode (Yanagi)', price: 20000, priceUsd: '3.75', note: null },
    { name: 'Special Episode (Astra Yao)', price: 15000, priceUsd: '3', note: null },
    { name: 'Full Chapter 5', price: 25000, priceUsd: '4.7', note: null },
    { name: 'Full Season 1 Epilogue (A)', price: 30000, priceUsd: '5.6', note: null },
    { name: 'Full Season 1 Epilogue (B)', price: 25000, priceUsd: '4.7', note: null },
    { name: 'Full 2.0 (Where Clouds Embrace the Dawn)', price: 35000, priceUsd: '6.5', note: null },
    { name: 'Full 2.1', price: 30000, priceUsd: '5.6', note: null },
    { name: 'Full 2.2', price: 30000, priceUsd: '5.6', note: null },
    { name: 'Full 2.3 (Memories of Dreams Bygone)', price: 30000, priceUsd: '5.6', note: null },
    { name: 'Full 2.4', price: 30000, priceUsd: '5.6', note: null },
]

// Pricelist - Endgame Content
const pricelistEndgame = [
    { name: 'Shiyu Defense (Per Stage)', price: 7000, priceUsd: '1.3', note: 'Refund based on completion ranking' },
    { name: 'Shiyu Defense (Full Clear)', price: 50000, priceUsd: '9.4', note: 'All stages' },
    { name: 'Deadly Assault (Per Boss)', price: 10000, priceUsd: '2', note: null },
]

// Pricelist - Events
const pricelistEvents = [
    { name: 'Event (Arcade)', price: 15000, priceUsd: '3', note: 'Mini-game events' },
    { name: 'Event (Medium)', price: 20000, priceUsd: '3.75', note: 'Standard events' },
    { name: 'Event (Major)', price: 30000, priceUsd: '5.6', note: 'Large-scale events' },
]

// Pricelist - Commissions & Quests
const pricelistCommissions = [
    { name: 'Video Archive (Agent)', price: 10000, priceUsd: '2', note: 'Soldier 11, Nekomata, Grace, Koleda: 15K' },
    { name: 'Prophecy (Explore Commission)', price: 25000, priceUsd: '4.7', note: null },
    { name: 'Golden Bangboo Town', price: 12000, priceUsd: '2.25', note: 'Explore Commission' },
    { name: 'Normal Quest Explore', price: 7500, priceUsd: '1.4', note: 'Tell us via WhatsApp/Telegram' },
    { name: 'Rally Commission (Combat)', price: 5000, priceUsd: '1', note: null },
    { name: 'Hard Mode Story', price: 4000, priceUsd: '0.75', note: 'Per quest' },
]

// Pricelist - Character & Account
const pricelistCharacter = [
    { name: 'Build Character (from 0)', price: 15000, priceUsd: '3', note: 'Full agent build' },
    { name: 'Trust/Friendship', price: 4000, priceUsd: '0.75', note: 'Per agent' },
]

// FAQs
const faqs = [
    {
        question: 'Do you clear Shiyu Defense/Deadly Assault and Hollow Zero?',
        answer: 'Yes! We complete all Shiyu Defense/Deadly Assault floors and Hollow Zero runs (for special request or full patch package). Clear depth depends on your account\'s agent roster and investment level.',
    },
    {
        question: 'Can you farm specific Drive Discs or materials?',
        answer: 'Absolutely. Tell us which agents you\'re building and we\'ll prioritize their materials. Full patch packages include dedicated Drive Disc farming for spesific agents.',
    },
    {
        question: 'Will you complete story content?',
        answer: 'We complete new story chapters, inter-knot commissions, and agent story/archive but for full patch package the story content is not included (except you want to order it with extra fee).',
    }
]
</script>
