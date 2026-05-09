'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
} from '@chakra-ui/react'
import { FaStar, FaSearch } from 'react-icons/fa'
import { RiListSettingsFill } from 'react-icons/ri'
import { MOCK_USERS } from '../data/mockUsers'

const UserCard = ({ user, image }: { user: any; image: string }) => (
  <Box w="full" py={4}>
    <HStack spacing={4} align="start">
      <Box
        w="83px"
        h="66px"
        rounded="2xl"
        overflow="hidden"
        bg="purple.200"
      >
        <Image src={image} alt={user.name} w="full" h="full" objectFit="cover" />
      </Box>

      <VStack align="start" flex={1} spacing={1}>
        <HStack w="full" justify="space-between" align="center">
          <Text color="cream.500" fontSize="13px" fontWeight="600">
            {user.name}
          </Text>
          <HStack spacing={1}>
            <Text color="cream.500" fontSize="16px" fontWeight="400">
              {user.rating}
            </Text>
            <Icon as={FaStar} color="mint.active" boxSize="19px" />
          </HStack>
        </HStack>

        <HStack spacing={1}>
          <Image src="/icons/location-icon.svg" alt="" w="10px" h="10px" />
          <Text color="cream.500" fontSize="8px" fontWeight="400" opacity={0.8}>
            {user.location}
          </Text>
        </HStack>

        <Flex w="full" justify="space-between" mt={1}>
          <VStack align="start" spacing={0}>
            <Text color="cream.500" fontSize="8px" fontWeight="500" opacity={0.6}>
              Title
            </Text>
            <Text color="cream.500" fontSize="8px" fontWeight="800" textTransform="uppercase">
              {user.title}
            </Text>
          </VStack>

          <VStack align="end" spacing={0}>
            <Text color="mint.active" fontSize="8px" fontWeight="500">
              Industry
            </Text>
            <Text color="cream.500" fontSize="8px" fontWeight="800" textAlign="right">
              {user.industry}
            </Text>
          </VStack>
        </Flex>
      </VStack>
    </HStack>
  </Box>
)

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDashboard } from '@/providers/DashboardProvider'

const MotionVStack = motion(VStack)

export const SearchSection = () => {
  const { refreshTrigger } = useDashboard()
  const [currentUsers, setCurrentUsers] = useState([MOCK_USERS[0], MOCK_USERS[1]])

  useEffect(() => {
    if (refreshTrigger > 0) {
      // Logic to pick 2 random different users
      const shuffled = [...MOCK_USERS].sort(() => 0.5 - Math.random())
      setCurrentUsers([shuffled[0], shuffled[1]])
    }
  }, [refreshTrigger])

  return (
    <Box
      bg="dark.900"
      w="full"
      maxW="424px"
      mx="auto"
      rounded="3xl"
      position="relative"
      zIndex={1}
      p={6}
      mb="-20px"
    >
      {/* Header Area */}
      <HStack w="full" justify="space-between" align="center" mb={8}>
        <VStack align="start" spacing={0}>
          <Text color="cream.500" fontSize="12px" fontWeight="400">
            Let's find your
          </Text>
          <Text color="cream.500" fontSize="18px" fontWeight="800" fontStyle="italic">
            next deal
          </Text>
        </VStack>

        <InputGroup maxW="180px" size="sm">
          <Input
            bg="rgba(255,255,255,0.1)"
            border="none"
            rounded="full"
            placeholder="Search"
            _placeholder={{ color: 'cream.500', opacity: 0.5 }}
            color="white"
            pl={4}
          />
          <InputRightElement mr={2}>
            <Image src="/icons/search-icon.svg" alt="" w="24px" h="24px" />
          </InputRightElement>
        </InputGroup>

        <Image src="/icons/preference-horizontal.svg" alt="" w="30px" h="30px" cursor="pointer" />
      </HStack>

      {/* User Cards with Animation */}
      <AnimatePresence mode="wait">
        <MotionVStack
          key={refreshTrigger}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          spacing={0}
          align="stretch"
        >
          <UserCard user={currentUsers[0]} image={`/images/client-${(refreshTrigger % 2) + 1}.png`} />
          <Divider borderColor="rgba(243, 240, 233, 0.1)" my={2} />
          <UserCard user={currentUsers[1]} image={`/images/client-${((refreshTrigger + 1) % 2) + 1}.png`} />
        </MotionVStack>
      </AnimatePresence>
    </Box>
  )
}

SearchSection.displayName = 'SearchSection'
