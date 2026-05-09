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
  const [searchQuery, setSearchQuery] = useState('')
  const [currentUsers, setCurrentUsers] = useState([MOCK_USERS[0], MOCK_USERS[1]])

  // Handle Refresh Trigger from Footer
  useEffect(() => {
    if (refreshTrigger > 0) {
      const shuffled = [...MOCK_USERS].sort(() => 0.5 - Math.random())
      setCurrentUsers([shuffled[0], shuffled[1]])
      setSearchQuery('') // Reset search on global refresh
    }
  }, [refreshTrigger])

  // Functional Search Logic
  const filteredUsers = searchQuery.trim() === '' 
    ? currentUsers 
    : MOCK_USERS.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.industry.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 2) // Maintain layout with 2 users

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
      <AnimatePresence mode="popLayout">
        <MotionVStack
          key={searchQuery || refreshTrigger}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          spacing={0}
          align="stretch"
          minH="150px"
        >
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, idx) => (
              <Box key={user.id}>
                <UserCard user={user} image={`/images/client-${(idx % 2) + 1}.png`} />
                {idx < filteredUsers.length - 1 && (
                  <Divider borderColor="rgba(243, 240, 233, 0.1)" my={2} />
                )}
              </Box>
            ))
          ) : (
            <Flex h="100px" align="center" justify="center" direction="column">
              <Text color="cream.500" opacity={0.6} fontSize="sm">No leads found</Text>
            </Flex>
          )}
        </MotionVStack>
      </AnimatePresence>
    </Box>
  )
}

SearchSection.displayName = 'SearchSection'
