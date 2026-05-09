export const colors = {
  brand: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
  },
  dark: {
    900: '#0E0319',
  },
  cream: {
    500: '#F3F0E9',
  },
  orange: {
    500: '#EE8821',
  },
  blue: {
    500: '#0496FF',
  },
  gray: {
    lead: '#727677',
  },
  purple: {
    active: '#D1BEF5',
  },
  chart: {
    background: '#FFFFFF',
    mint: '#C1DAD7',
    bar: '#EE8821',
    yAxis: '#727677',
  },
  pill: {
    moreBg: '#F3F0E9',
    moreText: '#0E0319',
    sevenDaysBg: '#0E0319',
    sevenDaysText: '#F3F0E9',
  },
  mint: {
    active: '#27E6A7',
  },
  // Semantic tokens can be added here or in a separate object
}

export const semanticTokens = {
  colors: {
    'bg-primary': { default: 'gray.50', _dark: 'gray.900' },
    'text-primary': { default: 'gray.800', _dark: 'whiteAlpha.900' },
    'text-secondary': { default: 'gray.600', _dark: 'whiteAlpha.600' },
    'accent-primary': { default: 'brand.500', _dark: 'brand.300' },
  },
}
