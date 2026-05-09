'use client'

import { Box, VStack, Container } from '@chakra-ui/react'
import { DashboardHeader, NetworkStats, ChartSection, SearchSection } from '@/features/dashboard'

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.50" pt={2} pb={40}>
      <Container maxW="container.sm" px={4}>
        <VStack spacing={6} align="stretch">
      <DashboardHeader />
          <NetworkStats />
          <ChartSection />
          <SearchSection />
          {/* Future dashboard sections will go here */}
        </VStack>
      </Container>
    </Box>
  )
}

Home.displayName = 'Home'
