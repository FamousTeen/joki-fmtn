<!-- components/ItemList.vue -->
<template>
    <section :id="sectionId" class="section bg-surface-950" aria-labelledby="services-title">
        <div class="container-wide">
            <!-- Section header -->
            <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                <span class="badge-primary mb-4">{{ badge }}</span>
                <h2 id="services-title" class="text-3xl md:text-4xl font-bold font-display mb-4">
                    {{ title }}
                </h2>
                <p class="text-surface-400 text-lg">
                    {{ subtitle }}
                </p>
            </div>

            <!-- Service cards grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-visible" role="list"
                aria-label="Available service tiers">
                <ServiceCard v-for="service in services" :key="service.id" v-bind="service" role="listitem" />
            </div>

            <!-- Additional info -->
            <div class="mt-12 p-6 rounded-2xl bg-surface-900 border border-surface-800">
                <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold text-surface-50 mb-1">
                            {{ infoTitle }}
                        </h3>
                        <p class="text-surface-400 text-sm">
                            {{ infoDescription }}
                        </p>
                    </div>
                    <button v-if="infoCtaText && showContactModal" type="button" @click="$emit('openContactModal')"
                        class="btn-ghost text-sm whitespace-nowrap">
                        {{ infoCtaText }}
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <a v-else-if="infoCtaText" :href="infoCtaUrl" class="btn-ghost text-sm whitespace-nowrap">
                        {{ infoCtaText }}
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

interface Service {
    id: string
    variant: 'daily' | 'weekly' | 'patch'
    title: string
    description: string
    price: number
    originalPrice?: number
    discount?: number
    pricePeriod?: string
    features: string[]
    excludedFeatures?: string[]
    isPopular?: boolean
    ctaText?: string
    ctaUrl: string
}

interface Props {
    sectionId?: string
    badge?: string
    title?: string
    subtitle?: string
    services: Service[]
    infoTitle?: string
    infoDescription?: string
    infoCtaText?: string
    infoCtaUrl?: string
    showContactModal?: boolean
}

defineEmits<{
    openContactModal: []
}>()

withDefaults(defineProps<Props>(), {
    sectionId: 'services',
    badge: 'Pricing',
    title: 'Choose Your Service',
    subtitle: 'Flexible options to fit your gaming needs. All services include secure account handling and progress updates.',
    infoTitle: 'Need a custom service?',
    infoDescription: 'Contact us for personalized packages, bulk orders, or specific requests not listed above.',
    infoCtaText: 'Contact Us',
    infoCtaUrl: '#contact',
})
</script>
