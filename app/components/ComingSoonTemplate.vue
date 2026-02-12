<!-- components/ComingSoonTemplate.vue -->
<template>
    <section class="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
        aria-labelledby="coming-soon-title">
        <!-- Background effects -->
        <div class="absolute inset-0 bg-gradient-to-br from-surface-950 via-surface-900 to-surface-950"
            aria-hidden="true" />
        <div class="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />

        <!-- Animated background orbs -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            aria-hidden="true" />
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 1.5s;" aria-hidden="true" />

        <div class="container-narrow relative z-10 text-center">
            <!-- Animated icon -->
            <div class="mb-8 inline-flex">
                <div class="relative">
                    <div
                        class="w-24 h-24 rounded-2xl bg-surface-800 border border-surface-700 flex items-center justify-center animate-float">
                        <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <!-- Glow ring -->
                    <div class="absolute inset-0 rounded-2xl animate-glow-pulse" aria-hidden="true" />
                </div>
            </div>

            <!-- Title -->
            <h1 id="coming-soon-title" class="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
                <span class="text-surface-50">{{ title }}</span>
                <br />
                <span class="text-gradient-primary">{{ subtitle }}</span>
            </h1>

            <!-- Description -->
            <p class="text-lg text-surface-400 max-w-lg mx-auto mb-8">
                {{ description }}
            </p>

            <!-- Countdown timer -->
            <div v-if="showCountdown && targetDate" class="flex justify-center gap-4 md:gap-6 mb-12" role="timer"
                :aria-label="`Countdown: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds remaining`">
                <div v-for="unit in countdownUnits" :key="unit.label" class="flex flex-col items-center">
                    <div
                        class="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-surface-800 border border-surface-700 flex items-center justify-center mb-2">
                        <span class="text-2xl md:text-3xl font-bold text-primary tabular-nums">
                            {{ String(unit.value).padStart(2, '0') }}
                        </span>
                    </div>
                    <span class="text-xs md:text-sm text-surface-500 uppercase tracking-wider">
                        {{ unit.label }}
                    </span>
                </div>
            </div>

            <!-- Waitlist form -->
            <div v-if="showWaitlistForm" class="max-w-md mx-auto">
                <form class="flex flex-col sm:flex-row gap-3" @submit.prevent="handleWaitlistSubmit">
                    <label for="waitlist-email" class="sr-only">Email address</label>
                    <input id="waitlist-email" v-model="email" type="email" placeholder="Enter your email" required
                        class="input flex-1" :disabled="isSubmitting" />
                    <button type="submit" class="btn-primary whitespace-nowrap" :disabled="isSubmitting">
                        <template v-if="isSubmitting">
                            <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4" />
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Joining...
                        </template>
                        <template v-else>
                            {{ ctaText }}
                        </template>
                    </button>
                </form>

                <!-- Success message -->
                <Transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0 translate-y-2"
                    enter-to-class="opacity-100 translate-y-0">
                    <p v-if="isSubmitted" class="mt-4 text-sm text-primary" role="status">
                        ✓ You're on the list! We'll notify you when this game is available.
                    </p>
                </Transition>

                <p class="mt-4 text-xs text-surface-500">
                    {{ privacyNote }}
                </p>
            </div>

            <!-- Alternative: Direct link -->
            <div v-else class="flex flex-col sm:flex-row justify-center gap-4">
                <a :href="primaryCtaUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">
                    {{ ctaText }}
                </a>
                <NuxtLink to="/" class="btn-secondary">
                    Back to Home
                </NuxtLink>
            </div>

            <!-- Game hints -->
            <div v-if="hints.length > 0" class="mt-16">
                <p class="text-sm text-surface-500 mb-4">Might be one of these...</p>
                <div class="flex flex-wrap justify-center gap-3">
                    <span v-for="hint in hints" :key="hint"
                        class="px-4 py-2 rounded-full bg-surface-800/50 border border-surface-700 text-surface-400 text-sm">
                        {{ hint }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Props {
    title?: string
    subtitle?: string
    description?: string
    targetDate?: string // ISO date string
    showCountdown?: boolean
    showWaitlistForm?: boolean
    ctaText?: string
    primaryCtaUrl?: string
    privacyNote?: string
    hints?: string[]
}

const props = withDefaults(defineProps<Props>(), {
    title: 'New Game',
    subtitle: 'Coming Soon',
    description: "We're working on adding support for a new game. Join the waitlist to be notified when it launches!",
    targetDate: '',
    showCountdown: true,
    showWaitlistForm: true,
    ctaText: 'Notify Me',
    primaryCtaUrl: '#',
    privacyNote: 'We only collect your email to notify you about this game launch. No spam, ever.',
    hints: () => ['Genshin Impact', 'Wuthering Waves', 'Arknights', 'Blue Archive'],
})

// Form state
const email = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Countdown composable
const countdown = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
})

const countdownUnits = computed(() => [
    { label: 'Days', value: countdown.value.days },
    { label: 'Hours', value: countdown.value.hours },
    { label: 'Minutes', value: countdown.value.minutes },
    { label: 'Seconds', value: countdown.value.seconds },
])

// Update countdown every second
let countdownInterval: ReturnType<typeof setInterval> | null = null

const updateCountdown = () => {
    if (!props.targetDate) return

    const target = new Date(props.targetDate).getTime()
    const now = Date.now()
    const diff = Math.max(0, target - now)

    countdown.value = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
    }
}

onMounted(() => {
    if (props.showCountdown && props.targetDate) {
        updateCountdown()
        countdownInterval = setInterval(updateCountdown, 1000)
    }
})

onUnmounted(() => {
    if (countdownInterval) {
        clearInterval(countdownInterval)
    }
})

// Form submission handler
const handleWaitlistSubmit = async () => {
    if (!email.value || isSubmitting.value) return

    isSubmitting.value = true

    // Simulate API call - in production, this would submit to your backend
    await new Promise(resolve => setTimeout(resolve, 1000))

    isSubmitting.value = false
    isSubmitted.value = true
    email.value = ''

    // Reset success message after 5 seconds
    setTimeout(() => {
        isSubmitted.value = false
    }, 5000)
}
</script>
