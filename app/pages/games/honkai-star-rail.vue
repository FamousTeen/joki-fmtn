<!-- pages/games/honkai-star-rail.vue -->
<template>
    <div>
        <!-- Hero Section -->
        <HeroBanner badge="Honkai: Star Rail" title-prefix="Honkai: Star Rail" game-id="hsr"
            title-highlight="Pilot Service"
            description="From daily commissions to endgame content, we've got your Trailblazer journey covered. Memory of Chaos, Pure Fiction, and Apocalyptic Shadow ready."
            :primary-cta-text="'Order Now'" :primary-cta-url="googleFormUrl" :primary-cta-external="true"
            secondary-cta-text="View Packages" secondary-cta-url="#services" :show-game-selector="false"
            bg-class="bg-gradient-to-br from-surface-950 via-blue-950/20 to-surface-950" />

        <!-- Game-specific Services -->
        <ItemList section-id="services" badge="HSR Services" title="Star Rail Packages"
            subtitle="Tailored services for Honkai: Star Rail players. All endgame content included."
            :services="hsrServices" info-title="Special Requests?"
            info-description="Need help with a specific challenges, quests or other items? We can provide targeted assistance."
            info-cta-text="Contact for Custom" :show-contact-modal="true"
            @open-contact-modal="isContactModalOpen = true" />

        <!-- Contact Modal -->
        <ContactModal :is-open="isContactModalOpen" @close="isContactModalOpen = false" />

        <!-- What's Included Section - Full Pricelist -->
        <section class="section bg-surface-900" aria-labelledby="pricelist-title">
            <div class="container-wide">
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <span class="badge-primary mb-4">Full Pricelist</span>
                    <h2 id="pricelist-title" class="text-3xl md:text-4xl font-bold font-display mb-4">
                        Service Pricing
                    </h2>
                    <p class="text-surface-400 text-lg">
                        Detailed pricing for all Honkai: Star Rail services.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Story & Quests -->
                    <div class="card overflow-hidden">
                        <div class="bg-blue-500/20 px-6 py-4 border-b border-surface-800">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">📖</span>
                                <h3 class="font-bold text-surface-50 text-lg">Story & Quests</h3>
                            </div>
                        </div>
                        <div class="p-6 space-y-3">
                            <div v-for="item in pricelistStory" :key="item.name"
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

                    <!-- Simulated Universe -->
                    <div class="card overflow-hidden">
                        <div class="bg-purple-500/20 px-6 py-4 border-b border-surface-800">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">🌌</span>
                                <h3 class="font-bold text-surface-50 text-lg">Simulated Universe</h3>
                            </div>
                        </div>
                        <div class="p-6 space-y-3">
                            <div v-for="item in pricelistSU" :key="item.name"
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

                    <!-- Map Exploration -->
                    <div class="card overflow-hidden">
                        <div class="bg-yellow-500/20 px-6 py-4 border-b border-surface-800">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">🗺️</span>
                                <h3 class="font-bold text-surface-50 text-lg">Map Exploration</h3>
                            </div>
                        </div>
                        <div class="p-6 space-y-3">
                            <div v-for="item in pricelistMap" :key="item.name"
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
                        💡 Refund guarantee applies to MOC/PF/AS based on incomplete stars.
                    </p>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="section bg-surface-950" aria-labelledby="faq-title">
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
        <section class="section bg-surface-900">
            <div class="container-narrow text-center">
                <h2 class="text-3xl font-bold font-display mb-4">
                    Ready to Board the Astral Express?
                </h2>
                <p class="text-surface-400 mb-8 max-w-xl mx-auto">
                    Let us handle the daily grind while you enjoy the story and gacha pulls.
                </p>
                <a :href="googleFormUrl" target="_blank" rel="noopener noreferrer"
                    class="btn-primary text-lg px-8 py-4">
                    Order HSR Service
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
    title: 'Honkai: Star Rail Pilot Service | FMTN',
    description: 'Professional HSR pilot service. Daily commissions, weekly bosses, Memory of Chaos, Pure Fiction, and more.',
    ogTitle: 'Honkai: Star Rail Pilot Service | FMTN',
    ogDescription: 'Professional HSR pilot service. Daily commissions, weekly bosses, Memory of Chaos, Pure Fiction, and more.',
    ogType: 'website',
    ogUrl: 'https://fmtn-pilot.vercel.app/games/honkai-star-rail',
    ogImage: 'https://fmtn-pilot.vercel.app/og-hsr.png',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Honkai: Star Rail Pilot Service | FMTN',
    twitterDescription: 'Professional HSR pilot service. Daily commissions, weekly bosses, Memory of Chaos, Pure Fiction, and more.',
    twitterImage: 'https://fmtn-pilot.vercel.app/og-hsr.png',
})

// Canonical URL
useHead({
    link: [
        { rel: 'canonical', href: 'https://fmtn-pilot.vercel.app/games/honkai-star-rail' }
    ]
})

// JSON-LD Structured Data for HSR Service
useSchemaOrg([
    defineWebPage({
        '@type': 'WebPage',
        name: 'Honkai: Star Rail Pilot Service',
        description: 'Professional HSR pilot service. Daily commissions, weekly bosses, Memory of Chaos, Pure Fiction, and more.',
    }),
    {
        '@type': 'Service',
        name: 'Honkai: Star Rail Pilot Service',
        description: 'Professional pilot service for Honkai: Star Rail including daily commissions, weekly bosses, Memory of Chaos, Pure Fiction, and Apocalyptic Shadow.',
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
const googleFormUrl = config.public.hsrFormUrl as string

// Contact modal state
const isContactModalOpen = ref(false)

// HSR-specific services
const hsrServices = [
    {
        id: 'hsr-daily',
        variant: 'daily' as const,
        title: 'Daily Trailblaze',
        description: 'Daily tasks and stamina management for busy Trailblazers.',
        price: 4500,
        priceUsd: 0.85,
        pricePeriod: 'day',
        features: [
            'Daily Mission completion',
            'Trailblaze Power usage',
            'Assignment collection'
        ],
        ctaUrl: googleFormUrl,
    },
    {
        id: 'hsr-weekly',
        variant: 'weekly' as const,
        title: 'Weekly Express',
        description: 'Complete weekly coverage including bosses and simulated universe content.',
        price: 27000,
        priceUsd: 5,
        originalPrice: 32000,
        originalPriceUsd: 6,
        discount: 16,
        pricePeriod: 'week',
        features: [
            'Everything in Daily',
            'Echo of War bosses (if needed)',
            'Simulated/Divergent/Currency Wars clear',
            'Weekly BP clear'
        ],
        ctaUrl: googleFormUrl,
    },
    {
        id: 'hsr-patch',
        variant: 'patch' as const,
        title: 'Full Patch',
        description: 'Complete patch cycle coverage with all new content.',
        price: 170000,
        priceUsd: 25,
        originalPrice: 213000,
        originalPriceUsd: 32,
        discount: 25,
        pricePeriod: 'patch',
        features: [
            'Everything in Weekly',
            'All patch events',
            'Character building (max 2 if with additional fuel/Reversed Trailblaze Power)',
            'Relic optimization',
            'Endgame content (Memory of Chaos, Pure Fiction, Apocalyptic Shadow)'
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

// Pricelist - Story & Quests
const pricelistStory = [
    { name: 'Trailblaze Continuance', price: 20000, priceUsd: '3.75', note: 'Per continuance' },
    { name: 'A Foxian Tale of the Haunted', price: 35000, priceUsd: '6.5', note: '+ event included' },
    { name: 'Trailblaze Quest', price: 25000, priceUsd: '4.7', note: 'Per chapter (side quest excluded)' },
    { name: 'Companion Quest', price: 10000, priceUsd: '2', note: 'Per quest' },
    { name: 'Side Quest', price: 8000, priceUsd: '1.5', note: 'Per quest' },
    { name: 'Equilibrium Quest', price: 10000, priceUsd: '2', note: 'Per quest' },
]

// Pricelist - Events
const pricelistEvents = [
    { name: 'Event (Normal)', price: 13000, priceUsd: '2.5', note: 'Regular event clear' },
    { name: 'Event (Main)', price: 30000, priceUsd: '5.6', note: 'Major event clear' },
]

// Pricelist - Simulated Universe
const pricelistSU = [
    { name: 'Clear SU Weekly', price: 10000, priceUsd: '2', note: 'Weekly clear' },
    { name: 'SU DLC (Swarm/GnG)', price: 90000, priceUsd: '17', note: 'Full clear' },
    { name: 'SU DLC (Divergent)', price: 120000, priceUsd: '22.5', note: 'Full clear' },
    { name: 'SU DLC + Divergent Reputation', price: 150000, priceUsd: '28', note: 'Including level up' },
    { name: 'SU Unknowable Domain', price: 100000, priceUsd: '18.75', note: 'Full clear' },
    { name: 'Index Blessing', price: 30000, priceUsd: '5.6', note: 'Per DLC' },
]

// Pricelist - Endgame Content
const pricelistEndgame = [
    { name: 'Memory of Chaos (Per Stage)', price: 6000, priceUsd: '1', note: 'Refund for incomplete stars' },
    { name: 'Memory of Chaos (Full Clear)', price: 66000, priceUsd: '12.4', note: 'All stages' },
    { name: 'Pure Fiction / Apocalyptic Shadow (Per Stage)', price: 9000, priceUsd: '1.7', note: 'Refund for incomplete stars' },
    { name: 'PF/AS (Full Clear)', price: 27000, priceUsd: '5', note: 'All stages' },
]

// Pricelist - Character & Account
const pricelistCharacter = [
    { name: 'Build Character (from 0)', price: 15000, priceUsd: '3', note: 'Full character build' },
    { name: 'Salvage Relic', price: 10000, priceUsd: '2', note: 'Relic management' },
    { name: 'Sticker', price: 300, priceUsd: '0.1', note: 'Per sticker (side quest excluded)' },
    { name: 'Paket E6 HMC', price: 150000, priceUsd: '28', note: 'Full E6 unlock' },
    { name: 'Paket E6 RMC', price: 52000, priceUsd: '9.75', note: 'Story 3.0 + Okhema + Vortex Genesis' },
]

// Pricelist - Map Exploration
const pricelistMap = [
    { name: 'Map Herta Space Station', price: 15000, priceUsd: '3', note: 'Full exploration' },
    { name: 'Map Jarilo-VI', price: 30000, priceUsd: '5.6', note: 'Full exploration' },
    { name: 'Map Xianzhou Luofu', price: 60000, priceUsd: '11', note: 'Full exploration' },
    { name: 'Map Penacony', price: 170000, priceUsd: '32', note: '+ 6 side quests included' },
    { name: 'Chest Collection', price: '2.000/5 chests', priceUsd: '0.4/5 Chests', note: 'Bulk collection' },
    { name: 'Nymph/Bird Collection', price: '2.000/5 items', priceUsd: '0.4/5 items' },
]

// FAQs
const faqs = [
    {
        question: 'Do you clear Memory of Chaos / Pure Fiction / Apocalyptic Shadow?',
        answer: 'Yes! We clear all endgame content including MoC, PF, and AS for full pactch package and special requests.',
    },
    {
        question: 'Can you farm specific materials or relics?',
        answer: 'Absolutely. Just let us know which characters you\'re building and we\'ll prioritize their materials. For patch packages, we include targeted character builds (max 2).',
    },
    {
        question: 'What if a new patch drops during my service?',
        answer: 'All new content is included! Except for new SU DLCs, Anomaly Arbitration, Story and Quests which can be added on request. Events clear for full patch only have 1 quota for each quest (if i have completed the quests from previous patch, i won\'t clear the event after the new patch (except you order 2 or more full patche package)).',
    },
    {
        question: 'Will you do pulls on my account?',
        answer: 'Only if explicitly requested and pre-approved. We never pull without your written consent. We can provide advice on optimal pull timing and pity management.',
    },
]
</script>
