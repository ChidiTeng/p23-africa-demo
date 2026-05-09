'use client'

import {
  Box,
  Flex,
} from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { MatchCard } from './MatchCard'
import { SmartMatchesHeader } from './SmartMatchesHeader'
import { SmartMatchesActions } from './SmartMatchesActions'
import { useSmartMatches } from '../hooks/useSmartMatches'

const WAVY_PATTERN = `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' stroke='black' fill='transparent'/%3E%3C/svg%3E")`

export const SmartMatches = () => {
  const {
    users,
    index,
    isCelebrating,
    handleSwipe,
    handleMatch
  } = useSmartMatches()

  return (
    <Box w="full" h="100vh" bg="white" position="relative" overflow="hidden">
      <SmartMatchesHeader />

      {/* Wavy Background Overlay */}
      <Box 
        position="absolute" 
        top="72px" 
        bottom="0" 
        left="0" 
        right="0" 
        zIndex={0}
        opacity={0.05}
        pointerEvents="none"
        backgroundImage={WAVY_PATTERN}
        backgroundRepeat="repeat"
      />

      {/* Card Swiper Area */}
      <Flex flex={1} justify="center" align="center" h="calc(100vh - 250px)" position="relative">
        <AnimatePresence mode="popLayout">
          <MatchCard 
            key={users[index].id} 
            user={users[index]} 
            isTop={true} 
            onSwipe={handleSwipe} 
            isCelebrating={isCelebrating}
          />
          {index + 1 < users.length && (
            <MatchCard 
              key={users[index + 1].id} 
              user={users[index + 1]} 
              isTop={false} 
              onSwipe={() => {}} 
            />
          )}
        </AnimatePresence>
      </Flex>

      <SmartMatchesActions onMatch={handleMatch} />
    </Box>
  )
}

SmartMatches.displayName = 'SmartMatches'
