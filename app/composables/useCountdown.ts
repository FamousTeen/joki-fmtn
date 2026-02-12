<!-- composables/useCountdown.ts -->
export interface CountdownValues {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
  isComplete: boolean
}

export function useCountdown(targetDate: string | Date | Ref<string | Date>) {
  const target = computed(() => {
    const date = unref(targetDate)
    return date instanceof Date ? date : new Date(date)
  })

  const countdown = ref<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
    isComplete: false,
  })

  let intervalId: ReturnType<typeof setInterval> | null = null

  const calculate = () => {
    const now = Date.now()
    const diff = Math.max(0, target.value.getTime() - now)

    countdown.value = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      total: diff,
      isComplete: diff === 0,
    }
  }

  const start = () => {
    calculate()
    intervalId = setInterval(calculate, 1000)
  }

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  onMounted(start)
  onUnmounted(stop)

  // Watch for target date changes
  watch(target, () => {
    stop()
    start()
  })

  return {
    countdown: readonly(countdown),
    start,
    stop,
  }
}
