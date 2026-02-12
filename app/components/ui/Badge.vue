<!-- components/ui/Badge.vue -->
<template>
    <span :class="badgeClasses">
        <slot name="icon" />
        <slot />
    </span>
</template>

<script setup lang="ts">
type BadgeVariant = 'primary' | 'accent' | 'surface' | 'success' | 'warning' | 'danger'
type BadgeSize = 'sm' | 'md'

interface Props {
    variant?: BadgeVariant
    size?: BadgeSize
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'surface',
    size: 'md',
})

const badgeClasses = computed(() => {
    const base = 'inline-flex items-center gap-1 font-semibold uppercase tracking-wide rounded-full'

    const variants: Record<BadgeVariant, string> = {
        primary: 'bg-primary/20 text-primary border border-primary/30',
        accent: 'bg-accent/20 text-accent-400 border border-accent/30',
        surface: 'bg-surface-800 text-surface-300 border border-surface-700',
        success: 'bg-green-500/20 text-green-400 border border-green-500/30',
        warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
        danger: 'bg-red-500/20 text-red-400 border border-red-500/30',
    }

    const sizes: Record<BadgeSize, string> = {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-2.5 py-1 text-xs',
    }

    return [base, variants[props.variant], sizes[props.size]]
})
</script>
