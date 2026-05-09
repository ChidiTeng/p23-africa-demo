'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  AvatarGroup,
  Avatar,
  Button,
  Image,
} from '@chakra-ui/react'

export const NetworkStats = () => {
  return (
    <VStack align="start" w="full">
      <Text
        color="dark.900"
        fontSize="xs-sub"
        fontWeight="600"
        fontFamily="heading"
        lineHeight="17px"
        textTransform="capitalize"
      >
        Network Stats
      </Text>

      <Flex w="full" align="center" gap={4} wrap={{ base: 'wrap', md: 'nowrap' }}>
        {/* Left Stats Capsule */}
        <HStack
          flex="1"
          maxW="304px"
          h="60px"
          bg="white"
          border="1.5px solid"
          borderColor="dark.900"
          rounded="full"
          py="6px"
          px="30px"
          spacing={6}
          justify="center"
        >
          {/* Leads */}
          <HStack spacing={2}>
            <Image src="/icons/share-knowledge.png" alt="" w="24px" h="24px" />
            <VStack align="start" spacing={0}>
              <Text
                color="orange.500"
                fontSize="20px"
                fontWeight="700"
                lineHeight="1"
              >
                45k
              </Text>
              <Text color="gray.lead" fontSize="13px" fontWeight="400">
                Leads
              </Text>
            </VStack>
          </HStack>

          {/* Connections */}
          <HStack spacing={2}>
            <Image src="/icons/unlink-01.png" alt="" w="24px" h="24px" />
            <VStack align="start" spacing={0}>
              <Text
                color="blue.500"
                fontSize="20px"
                fontWeight="700"
                lineHeight="1"
              >
                75k
              </Text>
              <Text color="gray.lead" fontSize="13px" fontWeight="400">
                Connections
              </Text>
            </VStack>
          </HStack>
        </HStack>

        {/* Right Info Section */}
        <VStack align="center" spacing={0} flexShrink={0}>
          <VStack spacing={0} align="center">
            <AvatarGroup size="xs" max={3} spacing="-0.45rem">
              <Avatar src="/images/avatar-1.png" border="2px solid white" />
              <Avatar src="/images/avatar-2.png" border="2px solid white" />
              <Avatar src="/images/avatar-3.png" border="2px solid white" />
            </AvatarGroup>
            <Text
              fontSize="2xs"
              color="dark.900"
              fontWeight="400"
              lineHeight="25.56px"
            >
              200k+ People
            </Text>
          </VStack>

          <Button
            bg="purple.active"
            h="27px"
            w="94px"
            rounded="full"
            fontSize="2xs"
            color="#262A27"
            fontWeight="700"
            _hover={{ opacity: 0.9 }}
            px="10px"
            py="8px"
          >
            Active Members
          </Button>
        </VStack>
      </Flex>
    </VStack>
  )
}

NetworkStats.displayName = 'NetworkStats'
