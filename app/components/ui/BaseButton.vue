<!-- components/ui/BaseButton.vue -->
<template>
    <component :is="componentType" :to="to" :href="href" :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined" :type="!to && !href ? type : undefined"
        :disabled="disabled || loading" :class="buttonClasses" :aria-disabled="disabled || loading" :aria-busy="loading"
        v-bind="$attrs">
        <!-- Loading spinner -->
        <svg v-if="loading" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>

        <!-- Icon left -->
        <slot v-if="!loading" name="icon-left" />

        <!-- Content -->
        <span v-if="!loading || loadingText">
            {{ loading ? loadingText : undefined }}
            <slot v-if="!loading" />
        </span>

        <!-- Icon right -->
        <slot v-if="!loading" name="icon-right" />

        <!-- External link indicator -->
        <svg v-if="external && showExternalIcon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
    </component>
</template>

<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface Props {
    variant?: ButtonVariant
    size?: ButtonSize
    to?: string
    href?: string
    external?: boolean
    showExternalIcon?: boolean
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    loadingText?: string
    fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    loading: false,
    external: false,
    showExternalIcon: true,
    fullWidth: false,
})

// Determine component type
const componentType = computed(() => {
    if (props.to) return resolveComponent('NuxtLink')
    if (props.href) return 'a'
    return 'button'
})

// Button classes
const buttonClasses = computed(() => {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950'

    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-primary text-surface-950 hover:bg-primary-400 hover:shadow-glow focus-visible:ring-primary active:scale-[0.98]',
        secondary: 'bg-surface-800 text-surface-50 border border-surface-700 hover:bg-surface-700 hover:border-surface-600 focus-visible:ring-surface-400 active:scale-[0.98]',
        accent: 'bg-accent text-white hover:bg-accent-500 hover:shadow-glow-accent focus-visible:ring-accent active:scale-[0.98]',
        ghost: 'text-surface-300 hover:bg-surface-800 hover:text-surface-50 focus-visible:ring-surface-400 active:scale-[0.98]',
        danger: 'bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-500 active:scale-[0.98]',
    }

    const sizes: Record<ButtonSize, string> = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-xl',
    }

    const disabledStyles = (props.disabled || props.loading)
        ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none'
        : ''

    const widthStyles = props.fullWidth ? 'w-full' : ''

    return [base, variants[props.variant], sizes[props.size], disabledStyles, widthStyles]
})
</script>
