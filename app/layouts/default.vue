<!-- layouts/default.vue -->
<template>
    <div class="min-h-screen bg-surface-950 text-surface-50 flex flex-col">
        <!-- Skip to main content link for accessibility -->
        <a href="#main-content"
            class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn-primary">
            Skip to main content
        </a>

        <!-- Navigation -->
        <NavBar />

        <!-- Main content area -->
        <main id="main-content" class="flex-1" tabindex="-1">
            <slot />
        </main>

        <!-- Footer -->
        <FooterContact />
    </div>
</template>

<script setup lang="ts">
// Layout metadata
defineOptions({
    name: 'DefaultLayout',
})
</script>
