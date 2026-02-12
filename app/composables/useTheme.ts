<!-- composables/useTheme.ts -->
// Theme colors extracted from provided images
export const themeColors = {
  primary: {
    DEFAULT: '#84cc16',
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
    950: '#1a2e05',
  },
  accent: {
    DEFAULT: '#c026d3',
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    950: '#4a044e',
  },
  surface: {
    DEFAULT: '#171717',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
} as const

export type ThemeColorKey = keyof typeof themeColors
export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 | 'DEFAULT'

export function useTheme() {
  const getColor = (colorKey: ThemeColorKey, shade: ColorShade = 'DEFAULT'): string => {
    return themeColors[colorKey][shade]
  }

  const getCssVar = (colorKey: ThemeColorKey, shade: ColorShade = 'DEFAULT'): string => {
    return `var(--color-${colorKey}${shade === 'DEFAULT' ? '' : `-${shade}`})`
  }

  return {
    colors: themeColors,
    getColor,
    getCssVar,
  }
}
