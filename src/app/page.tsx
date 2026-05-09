'use client'

import { Box, VStack, Container } from '@chakra-ui/react'
import { DashboardHeader, NetworkStats, ChartSection, SearchSection, SmartMatches } from '@/features/dashboard'
import { useDashboard } from '@/providers/DashboardProvider'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const { currentView } = useDashboard()

  return (
    <Box minH="100vh" bg={currentView === 'matches' ? 'white' : 'gray.50'} pb={40}>
      <Container maxW="full" px={0}>
        <AnimatePresence mode="wait">
          {currentView === 'dashboard' ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <VStack spacing={6} align="stretch" px={4} pt={2}>
                <DashboardHeader />
                <NetworkStats />
                <ChartSection />
                <SearchSection />
              </VStack>
            </motion.div>
          ) : (
            <motion.div
              key="matches"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <SmartMatches />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  )
}

Home.displayName = 'Home'
