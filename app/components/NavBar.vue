<!-- components/NavBar.vue -->
<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-surface-950/80 backdrop-blur-md border-b border-surface-800/50">
        <nav class="container-wide flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            <!-- Logo -->
            <NuxtLink to="/"
                class="flex items-center gap-3 text-xl font-bold font-display tracking-tight hover:text-primary transition-colors"
                aria-label="FMTN Pilot Service - Home">
                <span class="text-primary">FMTN</span>
                <span><img src="~/assets/profile.png"
                        class="w-[50px] h-[50px] drop-shadow-[0_0_10px_rgba(132,204,22,0.6)] hover:drop-shadow-[0_0_15px_rgba(132,204,22,0.8)] transition-all duration-300"
                        alt="FMTN Logo" /></span>
                <span class="hidden sm:inline text-surface-300">Pilot Service</span>
            </NuxtLink>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-1" role="menubar">
                <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
                    class="px-4 py-2 rounded-lg text-surface-300 hover:text-surface-50 hover:bg-surface-800 transition-all duration-200"
                    :class="{ 'text-primary bg-primary/10': isActive(link.to) }" role="menuitem">
                    {{ link.label }}
                </NuxtLink>
            </div>

            <!-- CTA Button -->
            <div class="hidden md:block relative">
                <!-- Contact button for home page with dropdown -->
                <div v-if="isHomePage" class="relative">
                    <button type="button" @click="toggleContactDropdown"
                        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-700 hover:bg-surface-600 text-surface-50 font-semibold transition-all duration-200 text-sm"
                        :aria-expanded="isContactDropdownOpen" aria-haspopup="true" aria-label="Contact us">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact
                        <svg class="w-3 h-3 transition-transform duration-200"
                            :class="{ 'rotate-180': isContactDropdownOpen }" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <Transition enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition ease-in duration-150"
                        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <div v-if="isContactDropdownOpen"
                            class="absolute right-0 mt-2 w-48 rounded-lg bg-surface-800 border border-surface-700 shadow-xl py-2 z-50">
                            <a href="http://wa.me/62081230425719" target="_blank" rel="noopener noreferrer"
                                class="flex items-center gap-3 px-4 py-2.5 text-surface-300 hover:text-primary hover:bg-surface-700/50 transition-colors"
                                @click="isContactDropdownOpen = false">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
                                WhatsApp
                            </a>
                            <a href="https://t.me/FamousTeen" target="_blank" rel="noopener noreferrer"
                                class="flex items-center gap-3 px-4 py-2.5 text-surface-300 hover:text-primary hover:bg-surface-700/50 transition-colors"
                                @click="isContactDropdownOpen = false">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                </svg>
                                Telegram
                            </a>
                        </div>
                    </Transition>
                </div>
                <!-- Order Now button for game pages -->
                <a v-else-if="currentFormUrl" :href="currentFormUrl" target="_blank" rel="noopener noreferrer"
                    class="btn-primary text-sm" aria-label="Order now - opens in new tab">
                    Order Now
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button type="button"
                class="md:hidden p-2 rounded-lg text-surface-300 hover:text-surface-50 hover:bg-surface-800 transition-colors"
                :aria-expanded="isMobileMenuOpen" aria-controls="mobile-menu" aria-label="Toggle navigation menu"
                @click="toggleMobileMenu">
                <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </nav>

        <!-- Mobile Menu -->
        <Transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4">
            <div v-if="isMobileMenuOpen" id="mobile-menu" class="md:hidden bg-surface-900 border-b border-surface-800"
                role="menu">
                <div class="container-wide py-4 flex flex-col gap-2">
                    <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
                        class="px-4 py-3 rounded-lg text-surface-300 hover:text-surface-50 hover:bg-surface-800 transition-colors"
                        :class="{ 'text-primary bg-primary/10': isActive(link.to) }" role="menuitem"
                        @click="isMobileMenuOpen = false">
                        {{ link.label }}
                    </NuxtLink>
                    <!-- Contact button for home page (mobile) -->
                    <div v-if="isHomePage" class="flex flex-col gap-2 mt-2">
                        <span class="px-4 py-2 text-surface-500 text-sm font-semibold">Contact Us</span>
                        <a href="http://wa.me/62081230425719" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-3 px-4 py-3 rounded-lg text-surface-300 hover:text-primary hover:bg-surface-800 transition-colors"
                            @click="isMobileMenuOpen = false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5"
                                viewBox="0 0 16 16">
                                <path
                                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                            WhatsApp
                        </a>
                        <a href="https://t.me/FamousTeen" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-3 px-4 py-3 rounded-lg text-surface-300 hover:text-primary hover:bg-surface-800 transition-colors"
                            @click="isMobileMenuOpen = false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5"
                                viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                            </svg>
                            Telegram
                        </a>
                    </div>
                    <!-- Order Now button for game pages (mobile) -->
                    <a v-else-if="currentFormUrl" :href="currentFormUrl" target="_blank" rel="noopener noreferrer"
                        class="btn-primary text-center mt-2" aria-label="Order now - opens in new tab">
                        Order Now
                    </a>
                </div>
            </div>
        </Transition>
    </header>

    <!-- Spacer for fixed header -->
    <div class="h-16 md:h-20" aria-hidden="true"></div>
</template>

<script setup lang="ts">
const route = useRoute()

const isMobileMenuOpen = ref(false)
const isContactDropdownOpen = ref(false)

// Game-specific form URLs
const gameFormUrls: Record<string, string> = {
    '/games/honkai-star-rail': 'https://bit.ly/formFmTnjoki',
    '/games/zenless-zone-zero': 'https://bit.ly/formFmTnZZZjoki2',
}

// Determine if we're on the home page
const isHomePage = computed(() => route.path === '/')

// Get the correct form URL based on current route
const currentFormUrl = computed(() => {
    return gameFormUrls[route.path] || null
})

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/games/honkai-star-rail', label: 'Honkai: Star Rail' },
    { to: '/games/zenless-zone-zero', label: 'Zenless Zone Zero' },
    { to: '/games/coming-soon', label: 'Coming Soon' },
]

const isActive = (path: string): boolean => {
    if (path === '/') {
        return route.path === '/'
    }
    return route.path.startsWith(path)
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleContactDropdown = () => {
    isContactDropdownOpen.value = !isContactDropdownOpen.value
}

// Close dropdown when clicking outside
const closeContactDropdown = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest('.relative')) {
        isContactDropdownOpen.value = false
    }
}

// Close mobile menu on route change
watch(() => route.path, () => {
    isMobileMenuOpen.value = false
    isContactDropdownOpen.value = false
})

// Close mobile menu on escape key
onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            if (isMobileMenuOpen.value) {
                isMobileMenuOpen.value = false
            }
            if (isContactDropdownOpen.value) {
                isContactDropdownOpen.value = false
            }
        }
    }
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', closeContactDropdown)
    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape)
        document.removeEventListener('click', closeContactDropdown)
    })
})
</script>
