<!-- components/GameSelector.vue -->
<template>
    <div class="space-y-3">
        <p class="text-sm font-medium text-surface-400 uppercase tracking-wider text-center">
            Select a game
        </p>
        <div class="flex flex-wrap justify-center gap-3" role="group" aria-label="Game selection">
            <NuxtLink v-for="game in games" :key="game.id" :to="`/games/${game.slug}`"
                class="group relative flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-800/50 border border-surface-700 hover:border-primary/50 hover:bg-surface-800 transition-all duration-300 hover:shadow-glow-sm"
                :aria-label="`View ${game.name} services`">
                <!-- Game icon -->
                <div class="w-10 h-10 rounded-full overflow-hidden bg-surface-700 flex items-center justify-center text-lg font-bold text-primary group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true">
                    <img v-if="game.id === 'hsr'" src="~/assets/Honkai_Star_Rail_Icon.png" :alt="game.name"
                        class="w-full h-full object-cover" />
                    <img v-else-if="game.id === 'zzz'" src="~/assets/ZZZ_Icon.png" :alt="game.name"
                        class="w-full h-full object-cover" />
                    <span v-else>{{ game.name.charAt(0) }}</span>
                </div>
                <span class="font-medium text-surface-200 group-hover:text-surface-50 transition-colors">
                    {{ game.name }}
                </span>
                <!-- Arrow indicator -->
                <svg class="w-4 h-4 text-surface-500 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Game {
    id: string
    name: string
    slug: string
    icon?: string
}

interface Props {
    games: Game[]
}

defineProps<Props>()
</script>
