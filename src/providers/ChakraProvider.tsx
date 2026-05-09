'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider as BaseChakraProvider } from '@chakra-ui/react'
import theme from '@/theme'

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <BaseChakraProvider theme={theme}>
        {children}
      </BaseChakraProvider>
    </CacheProvider>
  )
}
