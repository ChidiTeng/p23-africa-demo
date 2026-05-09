'use client'

import {
  Box,
  Text,
  Avatar,
  VStack,
  HStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { NotificationDrawer } from './NotificationDrawer'

export const DashboardHeader = () => {
  const pageBg = useColorModeValue('gray.50', 'gray.900')
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <Box
      position="relative"
      w="full"
      h="102px"
      maxW="432px"
      mx="auto"
      bg="dark.900"
      rounded="lg"
      display="flex"
      alignItems="center"
      px="32px"
      overflow="hidden"
      border="none"
    >
      {/* Left Semi-circle Cut-out */}
      <Box
        position="absolute"
        left="-15px"
        top="50%"
        transform="translateY(-50%)"
        w="35px"
        h="43px"
        bg={pageBg}
        rounded="full"
      />

      {/* Right Semi-circle Cut-out */}
      <Box
        position="absolute"
        right="-15px"
        top="50%"
        transform="translateY(-50%)"
        w="35px"
        h="43px"
        bg={pageBg}
        rounded="full"
      />

      <HStack w="full" justify="space-between" align="center" zIndex={1}>
        <VStack align="start" spacing={0}>
          <Text
            color="cream.500"
            fontSize="18px"
            fontWeight="800"
            lineHeight="120%"
            fontFamily="heading"
          >
            Hello, Kwame!
          </Text>
          <Text
            color="cream.500"
            fontSize="13px"
            fontWeight="400"
            lineHeight="17px"
            letterSpacing="0.5px"
          >
            Good morning!
          </Text>
        </VStack>

        <HStack spacing={4}>
          <Box as="button" onClick={onOpen} _hover={{ opacity: 0.8 }}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.625 9.625V16.1875M4.375 16.1875V8.75C4.375 5.36726 7.11726 2.625 10.5 2.625"
                stroke="#F3F0E9"
                strokeWidth="1.3125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.9375 16.1875H3.0625"
                stroke="#F3F0E9"
                strokeWidth="1.3125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8125 17.9375C11.8125 18.6624 11.2249 19.25 10.5 19.25M10.5 19.25C9.77515 19.25 9.1875 18.6624 9.1875 17.9375M10.5 19.25V17.9375"
                stroke="#F3F0E9"
                strokeWidth="1.3125"
                strokeLinejoin="round"
              />
              <path
                d="M13.139 1.75H16.3523C17.0284 1.75 17.3665 1.75 17.4565 1.9601C17.5465 2.1702 17.3165 2.42224 16.8565 2.92632L13.866 5.82369C13.4059 6.32776 13.0489 6.5798 13.139 6.7899C13.229 7 13.6941 7 14.3701 7H17.5"
                stroke="#F3F0E9"
                strokeWidth="1.3125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Avatar
            size="md"
            src="/images/user-avatar.png"
            border="2px solid"
            borderColor="cream.500"
          />
        </HStack>
      </HStack>

      <NotificationDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

DashboardHeader.displayName = 'DashboardHeader'
