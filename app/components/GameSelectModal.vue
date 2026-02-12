<!-- components/GameSelectModal.vue -->
<template>
    <Teleport to="body">
        <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4"
                @click.self="closeModal">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-surface-950/80 backdrop-blur-sm" aria-hidden="true" />

                <!-- Modal -->
                <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <div v-if="isOpen"
                        class="relative w-full max-w-md bg-surface-900 border border-surface-700 rounded-2xl shadow-2xl overflow-hidden"
                        role="dialog" aria-modal="true" aria-labelledby="modal-title">
                        <!-- Header -->
                        <div class="px-6 py-4 border-b border-surface-700 flex items-center justify-between">
                            <h2 id="modal-title" class="text-xl font-bold font-display text-surface-50">
                                Select a Game
                            </h2>
                            <button type="button" @click="closeModal"
                                class="p-2 rounded-lg text-surface-400 hover:text-surface-50 hover:bg-surface-800 transition-colors"
                                aria-label="Close modal">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Game List -->
                        <div class="p-6 space-y-3">
                            <p class="text-surface-400 text-sm mb-4">
                                Choose which game you want to order pilot service for:
                            </p>

                            <!-- Honkai: Star Rail -->
                            <a href="https://bit.ly/formFmTnjoki" target="_blank" rel="noopener noreferrer"
                                class="group flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 border border-surface-700 hover:border-primary/50 hover:bg-surface-800 transition-all duration-300"
                                @click="closeModal">
                                <div class="w-14 h-14 rounded-full overflow-hidden bg-surface-700 flex-shrink-0">
                                    <img src="~/assets/Honkai_Star_Rail_Icon.png" alt="Honkai: Star Rail"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3
                                        class="font-semibold text-surface-50 group-hover:text-primary transition-colors">
                                        Honkai: Star Rail
                                    </h3>
                                    <p class="text-sm text-surface-400">Daily, Full Patch & Other Services</p>
                                </div>
                                <svg class="w-5 h-5 text-surface-500 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            <!-- Zenless Zone Zero -->
                            <a href="https://bit.ly/formFmTnZZZjoki2" target="_blank" rel="noopener noreferrer"
                                class="group flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 border border-surface-700 hover:border-primary/50 hover:bg-surface-800 transition-all duration-300"
                                @click="closeModal">
                                <div class="w-14 h-14 rounded-full overflow-hidden bg-surface-700 flex-shrink-0">
                                    <img src="~/assets/ZZZ_Icon.png" alt="Zenless Zone Zero"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3
                                        class="font-semibold text-surface-50 group-hover:text-primary transition-colors">
                                        Zenless Zone Zero
                                    </h3>
                                    <p class="text-sm text-surface-400">Daily, Full Patch & Other Services</p>
                                </div>
                                <svg class="w-5 h-5 text-surface-500 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <!-- Footer -->
                        <div class="px-6 py-4 bg-surface-800/50 border-t border-surface-700">
                            <p class="text-xs text-surface-500 text-center">
                                You will be redirected to our order form
                            </p>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
interface Props {
    isOpen: boolean
}

interface Emits {
    (e: 'close'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const closeModal = () => {
    emit('close')
}

// Close on escape key
onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    }
    document.addEventListener('keydown', handleEscape)
    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape)
    })
})
</script>
