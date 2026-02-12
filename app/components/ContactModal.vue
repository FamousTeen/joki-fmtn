<!-- components/ContactModal.vue -->
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
                        role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
                        <!-- Header -->
                        <div class="px-6 py-4 border-b border-surface-700 flex items-center justify-between">
                            <h2 id="contact-modal-title" class="text-xl font-bold font-display text-surface-50">
                                Contact Us
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

                        <!-- Contact List -->
                        <div class="p-6 space-y-3">
                            <p class="text-surface-400 text-sm mb-4">
                                Reach out to us through any of these platforms for custom requests:
                            </p>

                            <!-- WhatsApp -->
                            <a href="http://wa.me/62081230425719" target="_blank" rel="noopener noreferrer"
                                class="group flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 border border-surface-700 hover:border-green-500/50 hover:bg-surface-800 transition-all duration-300"
                                @click="closeModal">
                                <div
                                    class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="w-6 h-6 text-green-500" viewBox="0 0 16 16">
                                        <path
                                            d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3
                                        class="font-semibold text-surface-50 group-hover:text-green-500 transition-colors">
                                        WhatsApp
                                    </h3>
                                    <p class="text-sm text-surface-400">Quick response via chat</p>
                                </div>
                                <svg class="w-5 h-5 text-surface-500 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            <!-- Discord -->
                            <a href="https://discord.com/users/513588172333121551" target="_blank"
                                rel="noopener noreferrer"
                                class="group flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 border border-surface-700 hover:border-indigo-500/50 hover:bg-surface-800 transition-all duration-300"
                                @click="closeModal">
                                <div
                                    class="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3
                                        class="font-semibold text-surface-50 group-hover:text-indigo-500 transition-colors">
                                        Discord
                                    </h3>
                                    <p class="text-sm text-surface-400">FamousTeen</p>
                                </div>
                                <svg class="w-5 h-5 text-surface-500 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            <!-- Telegram -->
                            <a href="https://t.me/FamousTeen" target="_blank" rel="noopener noreferrer"
                                class="group flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 border border-surface-700 hover:border-sky-500/50 hover:bg-surface-800 transition-all duration-300"
                                @click="closeModal">
                                <div
                                    class="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="w-6 h-6 text-sky-500" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3
                                        class="font-semibold text-surface-50 group-hover:text-sky-500 transition-colors">
                                        Telegram
                                    </h3>
                                    <p class="text-sm text-surface-400">@FamousTeen</p>
                                </div>
                                <svg class="w-5 h-5 text-surface-500 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <!-- Footer -->
                        <div class="px-6 py-4 bg-surface-800/50 border-t border-surface-700">
                            <p class="text-xs text-surface-500 text-center">
                                We typically respond within a few hours
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

defineProps<Props>()

const emit = defineEmits<{
    close: []
}>()

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
