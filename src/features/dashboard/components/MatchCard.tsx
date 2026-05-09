'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'

const MotionBox = motion(Box)

interface MatchCardProps {
  user: any
  isTop: boolean
  onSwipe: (direction: 'left' | 'right') => void
  isCelebrating?: boolean
}

export const MatchCard = ({ user, isTop, onSwipe, isCelebrating }: MatchCardProps) => {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-60, 60])
  const controls = useAnimation()
  const [exitX, setExitX] = useState(0)

  useEffect(() => {
    if (isCelebrating && isTop) {
      const celebrate = async () => {
        await controls.start({
          scale: 1.1,
          rotate: [0, -5, 5, -5, 5, 0],
          transition: { duration: 0.8, ease: "easeInOut" }
        })
        controls.set({ 
          scale: 1, 
          rotate: 0,
          y: 0,
          opacity: 1
        })
      }
      celebrate()
    } else {
      controls.start({
        scale: isTop ? 1 : 0.92,
        opacity: 1,
        y: isTop ? 0 : 20,
        rotate: isTop ? 0 : -3,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
      })
    }
  }, [isCelebrating, isTop, controls])

  return (
    <MotionBox
      position="absolute"
      w="330px"
      h="480px"
      style={{ x, rotate: isTop ? (isCelebrating ? undefined : rotate) : (isTop === false ? -3 : 0) }}
      animate={controls}
      drag={isTop && !isCelebrating ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) {
          setExitX(500)
          onSwipe('right')
        } else if (info.offset.x < -100) {
          setExitX(-500)
          onSwipe('left')
        }
      }}
      initial={{ 
        scale: isTop ? 1 : 0.92, 
        opacity: 0, 
        y: isTop ? 0 : 20,
        rotate: isTop ? 0 : -5 
      }}
      exit={{ x: exitX, opacity: 0, rotate: exitX > 0 ? 60 : -60 }}
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
