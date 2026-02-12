<!-- components/ServiceCard.vue -->
<template>
    <div class="pt-4">
        <article class="card-glow group relative flex flex-col h-full" :class="[
            isPopular ? 'ring-2 ring-primary' : '',
            variantClass
        ]">
            <!-- Popular badge -->
            <div v-if="isPopular" class="absolute top-6 left-1/2 -translate-x-1/2 z-10">
                <span class="badge-primary">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                </span>
            </div>

            <!-- Card header -->
            <div class="p-6 pb-4 border-b border-surface-800">
                <!-- Variant badge -->
                <div class="flex items-center justify-between mb-4">
                    <span :class="badgeClass">
                        {{ variant }}
                    </span>
                    <span v-if="discount" class="text-sm text-primary font-medium">
                        Save {{ discount }}%
                    </span>
                </div>

                <!-- Title -->
                <h3 class="text-xl font-bold text-surface-50 mb-2">
                    {{ title }}
                </h3>

                <!-- Price -->
                <div class="flex items-baseline gap-2 flex-wrap">
                    <span class="text-3xl font-bold text-primary">
                        {{ formattedPrice }}
                    </span>
                    <span class="text-surface-500 text-sm">or</span>
                    <span class="text-3xl font-bold text-primary">
                        {{ formattedPriceUSD }}
                    </span>
                    <span class="text-surface-400 text-sm">
                        / {{ pricePeriod }}
                    </span>
                </div>
                <div v-if="originalPrice" class="text-surface-500 text-sm mt-1 line-through">
                    {{ formattedOriginalPrice }} or {{ formattedOriginalPriceUSD }}
                </div>
            </div>

            <!-- Card body - Features -->
            <div class="p-6 flex-1">
                <p class="text-surface-400 text-sm mb-4">
                    {{ description }}
                </p>

                <ul class="space-y-3" role="list" aria-label="Service features">
                    <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
                        <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-surface-300 text-sm">{{ feature }}</span>
                    </li>
                </ul>

                <!-- Excluded features (if any) -->
                <ul v-if="excludedFeatures?.length" class="mt-4 space-y-2" role="list" aria-label="Not included">
                    <li v-for="(feature, index) in excludedFeatures" :key="index"
                        class="flex items-start gap-3 opacity-50">
                        <svg class="w-5 h-5 text-surface-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span class="text-surface-500 text-sm">{{ feature }}</span>
                    </li>
                </ul>
            </div>

            <!-- Card footer - CTA -->
            <div class="p-6 pt-0">
                <a :href="ctaUrl" target="_blank" rel="noopener noreferrer" :class="[
                    isPopular ? 'btn-primary' : 'btn-secondary',
                    'w-full justify-center'
                ]" :aria-label="`${ctaText} for ${title} - opens in new tab`">
                    {{ ctaText }}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            <!-- Hover glow effect -->
            <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                :class="isPopular ? 'shadow-glow' : ''" aria-hidden="true" />
        </article>
    </div>
</template>

<script setup lang="ts">
type ServiceVariant = 'daily' | 'weekly' | 'patch'

interface Props {
    variant: ServiceVariant
    title: string
    description: string
    price: number
    priceUsd?: number
    originalPrice?: number
    originalPriceUsd?: number
    discount?: number
    pricePeriod?: string
    currency?: string
    features: string[]
    excludedFeatures?: string[]
    isPopular?: boolean
    ctaText?: string
    ctaUrl: string
}

const props = withDefaults(defineProps<Props>(), {
    pricePeriod: 'service',
    currency: 'IDR',
    isPopular: false,
    ctaText: 'Order Now',
})

// Computed styles based on variant
const variantClass = computed(() => {
    const classes: Record<ServiceVariant, string> = {
        daily: 'border-l-4 border-l-blue-500',
        weekly: 'border-l-4 border-l-accent',
        patch: 'border-l-4 border-l-primary',
    }
    return classes[props.variant]
})

const badgeClass = computed(() => {
    const classes: Record<ServiceVariant, string> = {
        daily: 'badge bg-blue-500/20 text-blue-400 border border-blue-500/30',
        weekly: 'badge-accent',
        patch: 'badge-primary',
    }
    return classes[props.variant]
})

// Format price with Indonesian Rupiah
const formattedPrice = computed(() => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: props.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(props.price)
})

const formattedOriginalPrice = computed(() => {
    if (!props.originalPrice) return ''
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: props.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(props.originalPrice)
})

// USD conversion rate (approximate: 1 USD = 16,000 IDR) - used as fallback
const IDR_TO_USD_RATE = 16000

const formattedPriceUSD = computed(() => {
    const usdPrice = props.priceUsd ?? props.price / IDR_TO_USD_RATE
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(usdPrice)
})

const formattedOriginalPriceUSD = computed(() => {
    if (!props.originalPrice) return ''
    const usdPrice = props.originalPriceUsd ?? props.originalPrice / IDR_TO_USD_RATE
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(usdPrice)
})
</script>
