import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { colors, semanticTokens } from './foundations/colors'
import { typography } from './foundations/typography'
import { spacing } from './spacing'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  ...typography,
  ...spacing,
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
      },
    },
  },
})

export default theme
export type Theme = typeof theme
