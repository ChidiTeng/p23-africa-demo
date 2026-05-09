'use client'

import { Box, Stack } from '@chakra-ui/react'
import { LandingHero, FeatureGrid } from '@/features/home'

export default function Home() {
  return (
    <Box minH="100vh" py={20} bg="gray.50">
      <Stack spacing={20}>
        <LandingHero />
        <FeatureGrid />
      </Stack>
    </Box>
  )
}
