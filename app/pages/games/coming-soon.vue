<!-- pages/games/coming-soon.vue -->
<template>
    <div>
        <!-- Hero Section -->
        <section class="section bg-surface-950 min-h-[50vh] flex items-center">
            <div class="container-narrow text-center">
                <span class="badge-accent mb-6">Coming Soon</span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                    New Games
                </h1>
                <p class="text-surface-400 text-lg md:text-xl max-w-2xl mx-auto">
                    We're expanding our pilot services to cover more games.
                </p>
            </div>
        </section>

        <!-- While You Wait Section -->
        <section class="section bg-surface-900" aria-labelledby="why-wait-title">
            <div class="container-narrow">
                <div class="text-center mb-12">
                    <h2 id="why-wait-title" class="text-3xl md:text-4xl font-bold font-display mb-4">
                        While You Wait...
                    </h2>
                    <p class="text-surface-400 text-lg">
                        Check out our current services for Honkai: Star Rail and Zenless Zone Zero.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <NuxtLink to="/games/honkai-star-rail" class="card-glow p-6 flex items-center gap-4">
                        <div class="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
                            🚂
                        </div>
                        <div>
                            <h3 class="font-semibold text-surface-50 mb-1">Honkai: Star Rail</h3>
                            <p class="text-sm text-surface-400">Daily, full patch and other services available</p>
                        </div>
                        <svg class="w-5 h-5 text-surface-500 ml-auto" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </NuxtLink>

                    <NuxtLink to="/games/zenless-zone-zero" class="card-glow p-6 flex items-center gap-4">
                        <div class="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl">
                            📺
                        </div>
                        <div>
                            <h3 class="font-semibold text-surface-50 mb-1">Zenless Zone Zero</h3>
                            <p class="text-sm text-surface-400">Daily, full patch and other services available</p>
                        </div>
                        <svg class="w-5 h-5 text-surface-500 ml-auto" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Suggest a Game Section -->
        <section class="section bg-surface-950" aria-labelledby="suggest-title">
            <div class="container-narrow">
                <div class="card p-8 md:p-12 text-center">
                    <div
                        class="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                        💡
                    </div>
                    <h2 id="suggest-title" class="text-2xl md:text-3xl font-bold font-display mb-4">
                        Suggest a Game
                    </h2>
                    <p class="text-surface-400 text-lg mb-8 max-w-xl mx-auto">
                        Have a game you'd love us to support? Let us know! Your suggestions help us decide which games
                        to add next.
                    </p>
                    <a :href="googleFormUrl" target="_blank" rel="noopener noreferrer"
                        class="btn-primary text-lg px-8 py-4">
                        Submit Your Suggestion
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Coming Soon | New Games | FMTN Pilot Service',
    description: 'New game pilot services coming soon. Suggest a game you\'d like us to support!',
})

const config = useRuntimeConfig()
const googleFormUrl = "https://bit.ly/FmTnFeedback"
</script>
