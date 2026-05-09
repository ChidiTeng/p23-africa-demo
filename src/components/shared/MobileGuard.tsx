'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  VStack,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'
import { MdPhonelinkSetup } from 'react-icons/md'

interface MobileGuardProps {
  children: React.ReactNode
}

export const MobileGuard = ({ children }: MobileGuardProps) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <>
      {/* Desktop View Overlay */}
      <Flex
        display={{ base: 'none', md: 'flex' }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={bgColor}
        zIndex="9999"
        align="center"
        justify="center"
        p={4}
      >
        <Container maxW="md">
          <VStack
            bg={cardBg}
            p={10}
            spacing={6}
            rounded="3xl"
            shadow="2xl"
            textAlign="center"
            border="1px solid"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
          >
            <Box
              p={4}
              bg="brand.50"
              color="brand.500"
              rounded="2xl"
            >
              <Icon as={MdPhonelinkSetup} boxSize={12} />
            </Box>
            
            <VStack spacing={2}>
              <Heading size="lg" fontWeight="extrabold">
                Mobile-Only Experience
              </Heading>
              <Text color={textColor} fontSize="md">
                This dashboard is optimized specifically for mobile devices to provide the best possible user experience.
              </Text>
            </VStack>

            <Text fontWeight="semibold" color="brand.500" bg="brand.50" px={4} py={2} rounded="full" fontSize="sm">
              Please switch to a mobile view or access this page from your mobile phone.
            </Text>
          </VStack>
        </Container>
      </Flex>

      {/* Mobile Content */}
      <Box display={{ base: 'block', md: 'none' }} minH="100vh">
        {children}
      </Box>
    </>
  )
}

MobileGuard.displayName = 'MobileGuard'
