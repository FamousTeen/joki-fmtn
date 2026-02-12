<!-- components/TestimonialsGallery.vue -->
<!--
  INSTAGRAM EMBED NOTES:
  - Instagram's oEmbed API requires app authentication (not publicly available)
  - Direct iframe embedding of Instagram posts/stories has been deprecated
  - This component uses a fallback strategy:
    1. Primary: Screenshot gallery (recommended)
    2. Secondary: Link to Instagram profile/highlights
  
  For production, consider:
  - Using Instagram Basic Display API with proper OAuth
  - Curated screenshot gallery with proper attribution
  - Embedding approved third-party widgets
-->
<template>
    <section id="testimonials" class="section bg-surface-900" aria-labelledby="testimonials-title">
        <div class="container-wide">
            <!-- Section header -->
            <div class="text-center max-w-2xl mx-auto mb-12">
                <span class="badge-accent mb-4">{{ badge }}</span>
                <h2 id="testimonials-title" class="text-3xl md:text-4xl font-bold font-display mb-4">
                    {{ title }}
                </h2>
                <p class="text-surface-400 text-lg">
                    {{ subtitle }}
                </p>
            </div>

            <!-- Testimonials Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list"
                aria-label="Customer testimonials">
                <article v-for="(testimonial, index) in testimonials" :key="index" class="card p-6 flex flex-col"
                    role="listitem">
                    <!-- Rating stars -->
                    <div class="flex gap-1 mb-4" :aria-label="`Rating: ${testimonial.rating} out of 5 stars`">
                        <svg v-for="star in 5" :key="star" class="w-5 h-5"
                            :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-surface-700'"
                            fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>

                    <!-- Quote -->
                    <blockquote class="flex-1 mb-4">
                        <p class="text-surface-200 leading-relaxed">
                            "{{ testimonial.quote }}"
                        </p>
                    </blockquote>

                    <!-- Author -->
                    <footer class="flex items-center gap-3 pt-4 border-t border-surface-800">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm"
                            aria-hidden="true">
                            {{ getInitials(testimonial.author) }}
                        </div>
                        <div>
                            <cite class="not-italic font-medium text-surface-50">
                                {{ testimonial.author }}
                            </cite>
                            <p class="text-sm text-surface-500">
                                {{ testimonial.game }} • {{ testimonial.service }}
                            </p>
                        </div>
                    </footer>
                </article>
            </div>

            <!-- Instagram Section -->
            <div class="mt-16">
                <div class="text-center mb-8">
                    <h3 class="text-xl font-bold text-surface-50 mb-2">
                        More Reviews on Instagram
                    </h3>
                    <p class="text-surface-400">
                        Check out our story highlights for more customer feedback
                    </p>
                </div>

                <!-- Instagram Embed Wrapper -->
                <div class="relative">
                    <!-- Fallback: Screenshot Gallery (Primary approach) -->
                    <div v-if="instagramScreenshots.length > 0"
                        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" role="list"
                        aria-label="Instagram testimonial screenshots">
                        <div v-for="(screenshot, index) in instagramScreenshots" :key="index"
                            class="group relative aspect-[9/16] rounded-xl overflow-hidden bg-surface-800"
                            role="listitem">
                            <img :src="screenshot.src" :alt="screenshot.alt"
                                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy" />
                            <!-- Overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="absolute bottom-0 left-0 right-0 p-3">
                                    <p class="text-sm text-surface-100 line-clamp-2">
                                        {{ screenshot.caption }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Alternative: Direct link to Instagram -->
                    <div v-else
                        class="flex flex-col items-center justify-center py-12 px-6 rounded-2xl bg-surface-800 border border-surface-700">
                        <div
                            class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mb-4">
                            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </div>
                        <p class="text-surface-300 text-center mb-4 max-w-md">
                            Visit our Instagram for more customer reviews, story highlights, and service updates.
                        </p>
                        <a :href="instagramUrl" target="_blank" rel="noopener noreferrer" class="btn-accent"
                            aria-label="Visit our Instagram profile - opens in new tab">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" shape-rendering="geometricPrecision"
                                text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                                fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512">
                                <path fill="#fff" fill-rule="nonzero"
                                    d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.483 47.121-.092 85.407 38.03 85.499 85.16.091 47.129-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.091c.141 72.602 59.106 131.327 131.69 131.186 72.592-.141 131.35-59.09 131.209-131.692-.141-72.577-59.114-131.335-131.715-131.194-72.585.141-131.325 59.115-131.184 131.7zm237.104-137.091c.033 16.953 13.817 30.681 30.772 30.648 16.961-.033 30.689-13.811 30.664-30.764-.033-16.954-13.818-30.69-30.78-30.657-16.962.033-30.689 13.818-30.656 30.773zm-208.696 345.4c-24.958-1.087-38.511-5.234-47.543-8.709-11.961-4.629-20.496-10.178-29.479-19.094-8.966-8.95-14.532-17.46-19.202-29.397-3.508-9.032-7.73-22.569-8.9-47.527-1.269-26.982-1.559-35.077-1.683-103.432-.133-68.339.116-76.434 1.294-103.441 1.069-24.942 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.479 8.949-8.982 17.459-14.532 29.403-19.202 9.025-3.525 22.561-7.714 47.511-8.9 26.998-1.277 35.085-1.551 103.423-1.684 68.353-.132 76.448.108 103.456 1.295 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.144 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.412 3.524 9 7.714 22.553 8.892 47.494 1.285 26.999 1.576 35.095 1.7 103.433.132 68.355-.117 76.451-1.302 103.441-1.087 24.958-5.226 38.52-8.709 47.561-4.629 11.952-10.161 20.487-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.559-103.448 1.684-68.338.132-76.424-.125-103.431-1.294zM149.977 1.773c-27.239 1.285-45.843 5.648-62.101 12.018-16.829 6.561-31.095 15.354-45.286 29.604C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.547 1.302 27.231 5.649 45.828 12.019 62.093 6.569 16.83 15.353 31.088 29.611 45.288 14.25 14.201 28.55 22.918 45.404 29.438 16.282 6.295 34.902 10.583 62.15 11.778 27.305 1.203 36.022 1.468 105.521 1.335 69.532-.132 78.25-.439 105.555-1.733 27.239-1.303 45.826-5.665 62.1-12.019 16.829-6.586 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.405 6.304-16.282 10.592-34.903 11.777-62.134 1.195-27.322 1.478-36.048 1.344-105.556-.133-69.516-.447-78.225-1.741-105.523-1.294-27.255-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.079-29.602-45.287-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.305-34.903-10.601-62.15-11.779C333.747.164 325.03-.102 255.506.031c-69.507.133-78.224.431-105.529 1.742z" />
                            </svg>
                            Follow @{{ instagramHandle }}
                        </a>
                    </div>
                </div>

                <!-- Privacy note -->
                <p class="text-center text-surface-500 text-xs mt-6">
                    Sensitive information always protected with blurring them
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Testimonial {
    quote: string
    author: string
    rating: number
    game: string
    service: string
}

interface Screenshot {
    src: string
    alt: string
    caption?: string
}

interface Props {
    badge?: string
    title?: string
    subtitle?: string
    testimonials?: Testimonial[]
    instagramHandle?: string
    instagramUrl?: string
    instagramScreenshots?: Screenshot[]
}

const props = withDefaults(defineProps<Props>(), {
    badge: 'Testimonials',
    title: 'What Our Clients Say',
    subtitle: 'Trusted by hundreds of players for reliable and professional service.',
    testimonials: () => [
        {
            quote: 'Super fast and efficient! Got all my dailies done while I was at work. Will definitely use again.',
            author: 'Alex M.',
            rating: 5,
            game: 'Honkai: Star Rail',
            service: 'Weekly Package',
        },
        {
            quote: 'Amazing service! They cleared all the content I was stuck on. Very professional communication throughout.',
            author: 'Sarah K.',
            rating: 5,
            game: 'Zenless Zone Zero',
            service: 'Full Patch',
        },
        {
            quote: 'Best pilot service I have used. Reasonable prices and they always deliver on time.',
            author: 'Mike R.',
            rating: 5,
            game: 'Honkai: Star Rail',
            service: 'Daily Package',
        },
        {
            quote: 'Trusted them with my account for a month now. Always secure and great progress every time.',
            author: 'Diana L.',
            rating: 5,
            game: 'Zenless Zone Zero',
            service: 'Weekly Package',
        },
        {
            quote: 'Quick responses, fair pricing, and excellent results. Highly recommend!',
            author: 'James T.',
            rating: 4,
            game: 'Honkai: Star Rail',
            service: 'Full Patch',
        },
        {
            quote: 'Finally found a reliable pilot service. They explain everything and keep you updated.',
            author: 'Emily W.',
            rating: 5,
            game: 'Zenless Zone Zero',
            service: 'Daily Package',
        },
    ],
    instagramHandle: 'jokibyfmtn',
    instagramUrl: 'https://www.instagram.com/jokibyfmtn',
    instagramScreenshots: () => [],
})

// Get runtime config after props
const config = useRuntimeConfig()

// Computed values that use config with prop fallbacks
const instagramHandle = computed(() => props.instagramHandle || config.public.instagramHandle as string || 'jokibyfmtn')
const instagramUrl = computed(() => props.instagramUrl || `https://instagram.com/${instagramHandle.value}`)

// Helper to get initials from name
const getInitials = (name: string): string => {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
}
</script>
