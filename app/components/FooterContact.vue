<!-- components/FooterContact.vue -->
<template>
    <footer class="bg-surface-900 border-t border-surface-800" role="contentinfo" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>

        <div class="container-wide py-12 md:py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <!-- Brand column -->
                <div class="lg:col-span-2">
                    <NuxtLink to="/" class="inline-flex items-center gap-2 text-xl font-bold font-display mb-4">
                        <span class="text-primary">FMTN</span>
                        <span class="text-surface-300">Pilot Service</span>
                    </NuxtLink>
                    <p class="text-surface-400 max-w-md mb-6">
                        {{ tagline }}
                    </p>

                    <!-- Social links -->
                    <div class="flex gap-4">
                        <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                            rel="noopener noreferrer"
                            class="w-10 h-10 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-surface-400 hover:text-primary hover:border-primary/50 transition-all duration-200"
                            :aria-label="`Follow us on ${social.name} - opens in new tab`">
                            <span v-html="social.icon" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <!-- Quick links -->
                <div>
                    <h3 class="font-semibold text-surface-50 mb-4">Services</h3>
                    <nav aria-label="Footer services navigation">
                        <ul class="space-y-3">
                            <li v-for="link in serviceLinks" :key="link.to">
                                <NuxtLink :to="link.to" class="text-surface-400 hover:text-primary transition-colors">
                                    {{ link.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- Contact -->
                <div>
                    <h3 class="font-semibold text-surface-50 mb-4">Contact</h3>
                    <div class="space-y-3">
                        <a :href="`http://wa.me/62081230425719`" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 text-surface-400 hover:text-primary transition-colors"
                            aria-label="Order via Google Form - opens in new tab">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-whatsapp w-5 h-5"
                                viewBox="0 0 16 16">
                                <path
                                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                            Whatsapp
                        </a>
                        <!-- Buat Discord Server next time -->
                        <a :href="`https://discord.com/users/513588172333121551`" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 text-surface-400 hover:text-primary transition-colors"
                            aria-label="Chat with us on Discord - opens in new tab">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                            </svg>
                            FamousTeen
                        </a>
                        <a :href="`https://t.me/FamousTeen`" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 text-surface-400 hover:text-primary transition-colors"
                            aria-label="Follow us on Instagram - opens in new tab">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="bi bi-telegram w-5 h-5" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                            </svg>
                            @FamousTeen
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom bar -->
            <div class="mt-12 pt-8 border-t border-surface-800">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-surface-500 text-sm">
                        © {{ currentYear }} FMTN Pilot Service. All rights reserved.
                    </p>
                    <div class="flex gap-6">
                        <NuxtLink to="#" class="text-surface-500 text-sm hover:text-surface-300 transition-colors">
                            Privacy Policy
                        </NuxtLink>
                        <NuxtLink to="#" class="text-surface-500 text-sm hover:text-surface-300 transition-colors">
                            Terms of Service
                        </NuxtLink>
                    </div>
                </div>

                <!-- Data collection notice -->
                <p class="mt-6 text-xs text-surface-600 text-center max-w-2xl mx-auto">
                    {{ dataNotice }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
interface SocialLink {
    name: string
    url: string
    icon: string
}

interface Props {
    tagline?: string
    discordUrl?: string
    instagramHandle?: string
    dataNotice?: string
    socialLinks?: SocialLink[]
    serviceLinks?: Array<{ to: string; label: string }>
}

const props = withDefaults(defineProps<Props>(), {
    tagline: 'Professional pilot services for your favorite gacha games. Reliable, secure, and always on time.',
    discordUrl: '',
    instagramHandle: '',
    dataNotice: 'When you submit an order through our Google Form, we collect your email, contact information, service preferences and transfer receipt solely to process your request. We do not share your information with third parties.',
    socialLinks: () => [
        {
            name: 'Instagram',
            url: 'https://instagram.com/fmtn_pilot',
            icon: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="currentcolor" fill-rule="nonzero" d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.483 47.121-.092 85.407 38.03 85.499 85.16.091 47.129-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.091c.141 72.602 59.106 131.327 131.69 131.186 72.592-.141 131.35-59.09 131.209-131.692-.141-72.577-59.114-131.335-131.715-131.194-72.585.141-131.325 59.115-131.184 131.7zm237.104-137.091c.033 16.953 13.817 30.681 30.772 30.648 16.961-.033 30.689-13.811 30.664-30.764-.033-16.954-13.818-30.69-30.78-30.657-16.962.033-30.689 13.818-30.656 30.773zm-208.696 345.4c-24.958-1.087-38.511-5.234-47.543-8.709-11.961-4.629-20.496-10.178-29.479-19.094-8.966-8.95-14.532-17.46-19.202-29.397-3.508-9.032-7.73-22.569-8.9-47.527-1.269-26.982-1.559-35.077-1.683-103.432-.133-68.339.116-76.434 1.294-103.441 1.069-24.942 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.479 8.949-8.982 17.459-14.532 29.403-19.202 9.025-3.525 22.561-7.714 47.511-8.9 26.998-1.277 35.085-1.551 103.423-1.684 68.353-.132 76.448.108 103.456 1.295 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.144 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.412 3.524 9 7.714 22.553 8.892 47.494 1.285 26.999 1.576 35.095 1.7 103.433.132 68.355-.117 76.451-1.302 103.441-1.087 24.958-5.226 38.52-8.709 47.561-4.629 11.952-10.161 20.487-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.559-103.448 1.684-68.338.132-76.424-.125-103.431-1.294zM149.977 1.773c-27.239 1.285-45.843 5.648-62.101 12.018-16.829 6.561-31.095 15.354-45.286 29.604C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.547 1.302 27.231 5.649 45.828 12.019 62.093 6.569 16.83 15.353 31.088 29.611 45.288 14.25 14.201 28.55 22.918 45.404 29.438 16.282 6.295 34.902 10.583 62.15 11.778 27.305 1.203 36.022 1.468 105.521 1.335 69.532-.132 78.25-.439 105.555-1.733 27.239-1.303 45.826-5.665 62.1-12.019 16.829-6.586 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.405 6.304-16.282 10.592-34.903 11.777-62.134 1.195-27.322 1.478-36.048 1.344-105.556-.133-69.516-.447-78.225-1.741-105.523-1.294-27.255-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.079-29.602-45.287-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.305-34.903-10.601-62.15-11.779C333.747.164 325.03-.102 255.506.031c-69.507.133-78.224.431-105.529 1.742z"/></svg>',
        },
        {
            name: 'Discord',
            url: 'https://discord.com/users/513588172333121551',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/></svg>',
        },
    ],
    serviceLinks: () => [
        { to: '/games/honkai-star-rail', label: 'Honkai: Star Rail' },
        { to: '/games/zenless-zone-zero', label: 'Zenless Zone Zero' },
        { to: '/games/coming-soon', label: 'Coming Soon' },
    ],
})

// Get runtime config after props
const config = useRuntimeConfig()

// Computed values that use config with prop fallbacks
const instagramHandle = computed(() => 'jokibyfmtn')

const currentYear = new Date().getFullYear()
</script>
