<!-- components/ui/GlowCard.vue -->
<template>
    <component :is="componentType" :to="to" :href="href" :class="cardClasses" v-bind="$attrs">
        <!-- Glow effect layer -->
        <div v-if="glow"
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :class="glowColorClass" aria-hidden="true" />

        <!-- Content -->
        <div class="relative z-10">
            <slot />
        </div>
    </component>
</template>

<script setup lang="ts">
type GlowColor = 'primary' | 'accent' | 'none'

interface Props {
    to?: string
    href?: string
    interactive?: boolean
    glow?: boolean
    glowColor?: GlowColor
    padding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    interactive: true,
    glow: true,
    glowColor: 'primary',
    padding: true,
})

const componentType = computed(() => {
    if (props.to) return resolveComponent('NuxtLink')
    if (props.href) return 'a'
    return 'div'
})

const glowColorClass = computed(() => {
    const colors: Record<GlowColor, string> = {
        primary: 'shadow-glow',
        accent: 'shadow-glow-accent',
        none: '',
    }
    return colors[props.glowColor]
})

const cardClasses = computed(() => {
    const base = 'relative rounded-2xl bg-surface-900 border border-surface-800 overflow-hidden transition-all duration-300 ease-out'

    const interactiveStyles = props.interactive
        ? 'group cursor-pointer hover:border-surface-700 hover:shadow-lg hover:shadow-surface-950/50 hover:translate-y-[-2px]'
        : ''

    const glowBorderStyles = props.glow && props.glowColor !== 'none'
        ? props.glowColor === 'primary'
            ? 'hover:border-primary/30'
            : 'hover:border-accent/30'
        : ''

    const paddingStyles = props.padding ? 'p-6' : ''

    return [base, interactiveStyles, glowBorderStyles, paddingStyles]
})
</script>
