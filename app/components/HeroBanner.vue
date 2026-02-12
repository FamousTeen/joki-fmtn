<!-- components/HeroBanner.vue -->
<template>
    <section class="relative min-h-[100vh] md:min-h-[90vh] flex items-center overflow-hidden" :class="[bgClass]"
        aria-labelledby="hero-title">
        <!-- Background layers -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-surface-950/50 to-surface-950"
            aria-hidden="true" />
        <div class="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
        <div class="absolute inset-0 bg-grid" aria-hidden="true" />

        <!-- Decorative glow orbs -->
        <div class="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"
            aria-hidden="true" />
        <div class="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 1s;" aria-hidden="true" />

        <!-- Content -->
        <div class="container-wide relative z-10">
            <div class="max-w-3xl pb-10 text-center">
                <!-- Badge -->
                <div v-if="badge"
                    class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-surface-800/80 border border-surface-700 backdrop-blur-sm animate-fade-in">
                    <span class="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
                    <span class="text-sm text-surface-300">{{ badge }}</span>
                </div>

                <!-- Title -->
                <h1 id="hero-title"
                    class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 animate-slide-up">
                    <span v-if="gameId === 'hsr'" class="inline-flex items-center justify-center">
                        <img src="~/assets/Honkai_Star_Rail_Icon.png" :alt="titlePrefix"
                            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover drop-shadow-[0_0_15px_rgba(132,204,22,0.5)]" />
                    </span>
                    <span v-else-if="gameId === 'zzz'" class="inline-flex items-center justify-center">
                        <img src="~/assets/ZZZ_Icon.png" :alt="titlePrefix"
                            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover drop-shadow-[0_0_15px_rgba(132,204,22,0.5)]" />
                    </span>
                    <span v-else class="text-surface-50">{{ titlePrefix }}</span>
                    <br />
                    <span class="text-gradient-primary">{{ titleHighlight }}</span>
                </h1>

                <!-- Description -->
                <p class="text-lg md:text-xl text-surface-300 max-w-xl mx-auto mb-8 animate-slide-up"
                    style="animation-delay: 0.1s;">
                    {{ description }}
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-wrap justify-center gap-4 animate-slide-up" style="animation-delay: 0.2s;">
                    <button v-if="showOrderModal" type="button" @click="isGameModalOpen = true"
                        class="btn-primary text-base md:text-lg px-8 py-4 animate-glow-pulse"
                        :aria-label="primaryCtaText">
                        {{ primaryCtaText }}
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    <a v-else :href="primaryCtaUrl" :target="primaryCtaExternal ? '_blank' : undefined"
                        :rel="primaryCtaExternal ? 'noopener noreferrer' : undefined"
                        class="btn-primary text-base md:text-lg px-8 py-4 animate-glow-pulse"
                        :aria-label="primaryCtaExternal ? `${primaryCtaText} - opens in new tab` : primaryCtaText">
                        {{ primaryCtaText }}
                        <svg v-if="primaryCtaExternal" class="w-5 h-5" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                    <NuxtLink v-if="secondaryCtaText" :to="secondaryCtaUrl"
                        class="btn-secondary text-base md:text-lg px-8 py-4">
                        {{ secondaryCtaText }}
                    </NuxtLink>
                </div>

                <!-- Game Select Modal -->
                <GameSelectModal :is-open="isGameModalOpen" @close="isGameModalOpen = false" />

                <!-- Game Selector -->
                <div v-if="showGameSelector" class="mt-12 animate-slide-up" style="animation-delay: 0.3s;">
                    <GameSelector :games="games" />
                </div>
            </div>
        </div>

        <!-- Hero Image (optional) -->
        <div v-if="heroImage" class="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block pointer-events-none"
            aria-hidden="true">
            <img :src="heroImage" :alt="heroImageAlt"
                class="absolute bottom-0 right-0 w-full h-auto max-h-full object-contain object-right-bottom opacity-80"
                loading="eager" />
        </div>
    </section>
</template>

<script setup lang="ts">
interface Game {
    id: string
    name: string
    slug: string
    icon?: string
}

interface Props {
    badge?: string
    titlePrefix?: string
    gameId?: string
    titleHighlight?: string
    description?: string
    primaryCtaText?: string
    primaryCtaUrl?: string
    primaryCtaExternal?: boolean
    secondaryCtaText?: string
    secondaryCtaUrl?: string
    heroImage?: string
    heroImageAlt?: string
    showGameSelector?: boolean
    showOrderModal?: boolean
    games?: Game[]
    bgClass?: string
}

const isGameModalOpen = ref(false)

const props = withDefaults(defineProps<Props>(), {
    badge: 'Professional Gaming Services',
    titlePrefix: "FMTN's",
    gameId: '',
    titleHighlight: 'Pilot Service',
    description: 'Expert pilot services for your favorite gacha games. Daily commissions, weekly bosses, and full patch assistance available.',
    primaryCtaText: 'Order Now',
    primaryCtaUrl: '#services',
    primaryCtaExternal: false,
    secondaryCtaText: 'View Services',
    secondaryCtaUrl: '#services',
    heroImage: '',
    heroImageAlt: 'Hero illustration',
    showGameSelector: true,
    showOrderModal: false,
    games: () => [
        { id: 'hsr', name: 'Honkai: Star Rail', slug: 'honkai-star-rail' },
        { id: 'zzz', name: 'Zenless Zone Zero', slug: 'zenless-zone-zero' },
        { id: 'soon', name: 'Coming Soon', slug: 'coming-soon' },
    ],
    bgClass: 'bg-surface-950',
})
</script>
