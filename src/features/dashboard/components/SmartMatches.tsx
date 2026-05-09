'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import { MOCK_USERS } from '../data/mockUsers'

const MotionBox = motion(Box)

interface MatchCardProps {
  user: any
  isTop: boolean
  onSwipe: (direction: 'left' | 'right') => void
}

const MatchCard = ({ user, isTop, onSwipe }: MatchCardProps) => {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-60, 60])

  return (
    <MotionBox
      position="absolute"
      w="330px"
      h="480px"
      style={{ x, rotate: isTop ? rotate : (isTop === false ? -3 : 0) }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) onSwipe('right')
        else if (info.offset.x < -100) onSwipe('left')
      }}
      initial={{ 
        scale: isTop ? 1 : 0.92, 
        opacity: 0, 
        y: isTop ? 0 : 20,
        rotate: isTop ? 0 : -5 
      }}
      animate={{ 
        scale: isTop ? 1 : 0.92, 
        opacity: 1, 
        y: isTop ? 0 : 20,
        rotate: isTop ? 0 : (isTop === false ? -3 : 0) 
      }}
      exit={{ x: 500, opacity: 0, rotate: 60 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      cursor={isTop ? 'grab' : 'default'}
      _active={{ cursor: isTop ? 'grabbing' : 'default' }}
      zIndex={isTop ? 2 : 1}
      bg="white"
      rounded="3xl"
      shadow={isTop ? '2xl' : 'lg'}
      overflow="hidden"
      pointerEvents={isTop ? 'auto' : 'none'}
    >
      <Box position="relative" h="80%" w="full">
        <Image 
          src={user.image || '/images/jamal-agoro-image.png'} 
          alt={user.name} 
          w="full" 
          h="full" 
          objectFit="cover" 
        />
        <Box 
          position="absolute" 
          bottom="0" 
          left="0" 
          right="0" 
          p={6} 
          bgGradient="linear(to-t, rgba(0,0,0,0.8), transparent)"
          textAlign="center"
        >
          <Text 
            color="#F3F0E9" 
            fontFamily="Montserrat" 
            fontWeight="800" 
            fontSize="24px" 
            lineHeight="100%"
          >
            {user.name}
          </Text>
          <Text 
            color="#F3F0E9" 
            fontFamily="Montserrat" 
            fontWeight="500" 
            fontSize="16px" 
            mt={2}
          >
            {user.title}
          </Text>
        </Box>
      </Box>

      <Flex h="20%" w="full" px={6} align="center" justify="center" bg="white">
        <HStack spacing={4}>
          <Box p={2} bg="gray.100" rounded="full">
            <Image src="/icons/match-compatibility-icon.svg" alt="" w="21px" h="21px" />
          </Box>
          <VStack align="start" spacing={0}>
            <Text fontFamily="Montserrat" fontWeight="400" fontSize="6px" color="#22272A">Smart Matching</Text>
            <Text fontFamily="Montserrat" fontWeight="600" fontSize="8px" color="#22272A">Compatibility</Text>
          </VStack>
          <Text fontFamily="Montserrat" fontWeight="800" fontSize="16px" color="#22272A">92%</Text>
        </HStack>
      </Flex>
    </MotionBox>
  )
}

const WAVY_PATTERN = `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' stroke='black' fill='transparent'/%3E%3C/svg%3E")`

export const SmartMatches = () => {
  const [index, setIndex] = useState(0)
  const users = [
    { id: 'jamal', name: 'Jamal Agoro', title: 'CTO AfriLaw', image: '/images/jamal-agoro-image.png' },
    ...MOCK_USERS.map(u => ({ id: u.id, name: u.name, title: u.title, image: u.avatar }))
  ]

  const handleSwipe = () => {
    setIndex(prev => (prev + 1) % users.length)
  }

  return (
    <Box w="full" h="100vh" bg="white" position="relative" overflow="hidden">
      {/* Header */}
      <Box 
        w="full" 
        h="72px" 
        bg="#193E47" 
        borderBottom="0.5px solid rgba(255,255,255,0.1)"
        px="30px"
        py="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack align="start" spacing={0}>
          <Text color="white" fontSize="xs" opacity={0.8}>Your Smart</Text>
          <Text color="white" fontSize="xl" fontWeight="800">Matches</Text>
        </VStack>

        <InputGroup maxW="180px" size="sm">
          <Input 
            bg="rgba(255,255,255,0.1)" 
            border="none" 
            rounded="full" 
            placeholder="Search" 
            color="white"
            _placeholder={{ color: 'white', opacity: 0.5 }}
          />
          <InputRightElement>
            <Image src="/icons/search-icon.svg" alt="" w="18px" h="18px" />
          </InputRightElement>
        </InputGroup>

        <Image src="/icons/refresh-icon.svg" alt="" w="30px" h="30px" cursor="pointer" />
      </Box>

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

      {/* Action Buttons Below Card */}
      <HStack 
        position="absolute" 
        bottom="140px" 
        w="full" 
        justify="center" 
        spacing={4} 
        px={6}
        zIndex={10}
      >
        <Box 
          w="52px" 
          h="52px" 
          bg="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          _hover={{ transform: 'scale(1.05)' }}
        >
          <Image src="/icons/add-lead-icon.svg" alt="" w="full" h="full" />
        </Box>

        <Button
          bg="#193E47"
          color="white"
          rounded="full"
          w="148px"
          h="52px"
          fontSize="13px"
          fontWeight="700"
          fontFamily="Montserrat"
          _hover={{ opacity: 0.9, transform: 'scale(1.05)' }}
          transition="all 0.2s"
          shadow="lg"
        >
          Match Us!
        </Button>
      </HStack>
    </Box>
  )
}

SmartMatches.displayName = 'SmartMatches'
