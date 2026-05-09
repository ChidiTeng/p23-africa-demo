'use client'

import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Avatar,
  Icon,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaCommentAlt, FaSearch, FaUsers, FaStar } from 'react-icons/fa'
import { MOCK_USERS, UserProfile } from '../../features/dashboard/data/mockUsers'

type FooterIconType = 2 | 4 | 5

import { motion, useAnimation } from 'framer-motion'
import { useDashboard } from '@/providers/DashboardProvider'

const MotionBox = motion(Box)

export const AppFooter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [activeContent, setActiveContent] = useState<FooterIconType | null>(null)
  const controls = useAnimation()
  const { refreshUsers, currentView, setCurrentView } = useDashboard()

  const handleIconClick = (type: FooterIconType) => {
    setActiveContent(type)
    onOpen()
  }

  const handleToggleView = async () => {
    // 360 Rotation Animation
    await controls.start({
      rotate: 360,
      transition: { duration: 0.6, ease: 'easeInOut' },
    })
    // Reset rotation for next click without animation
    controls.set({ rotate: 0 })
    
    // Toggle View
    setCurrentView(currentView === 'dashboard' ? 'matches' : 'dashboard')
    
    // Trigger user refresh
    refreshUsers()
  }

  const renderDrawerContent = () => {
    switch (activeContent) {
      case 2:
        return (
          <>
            <DrawerHeader borderBottomWidth="1px" fontFamily="heading">
              <HStack>
                <Icon as={FaCommentAlt} color="mint.active" />
                <Text>Instant Chat</Text>
              </HStack>
            </DrawerHeader>
            <DrawerBody py={10}>
              <VStack spacing={6} align="center" textAlign="center">
                <Box p={6} bg="purple.50" rounded="full">
                  <Icon as={FaCommentAlt} boxSize={12} color="purple.500" />
                </Box>
                <VStack spacing={2}>
                  <Heading size="md" color="dark.900">Coming Soon</Heading>
                  <Text color="gray.600">Chat with any lead instantly and close deals faster.</Text>
                </VStack>
              </VStack>
            </DrawerBody>
          </>
        )
      case 4:
        return (
          <>
            <DrawerHeader borderBottomWidth="1px" fontFamily="heading">
              <HStack>
                <Icon as={FaSearch} color="mint.active" />
                <Text>Smart Search</Text>
              </HStack>
            </DrawerHeader>
            <DrawerBody py={10}>
              <VStack spacing={6} align="center" textAlign="center">
                <Box p={6} bg="blue.50" rounded="full">
                  <Icon as={FaSearch} boxSize={12} color="blue.500" />
                </Box>
                <VStack spacing={2}>
                  <Heading size="md" color="dark.900">Search for your ideal client</Heading>
                  <Text color="gray.600">Our AI-powered search is coming soon to help you find perfect matches.</Text>
                </VStack>
              </VStack>
            </DrawerBody>
          </>
        )
      case 5:
        return (
          <>
            <DrawerHeader borderBottomWidth="1px" fontFamily="heading">
              <HStack>
                <Icon as={FaUsers} color="mint.active" />
                <Text>Leads Near You</Text>
              </HStack>
            </DrawerHeader>
            <DrawerBody px={4}>
              <VStack spacing={4} align="stretch" py={4}>
                {MOCK_USERS.map((user) => (
                  <HStack
                    key={user.id}
                    p={3}
                    bg="gray.50"
                    rounded="xl"
                    spacing={4}
                    _hover={{ bg: 'gray.100' }}
                    transition="all 0.2s"
                  >
                    <Avatar size="md" src={user.avatar} name={user.name} />
                    <VStack align="start" spacing={0} flex={1}>
                      <Text fontWeight="700" fontSize="sm" color="dark.900">
                        {user.name}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {user.location}
                      </Text>
                    </VStack>
                    <HStack spacing={1}>
                      <Icon as={FaStar} color="orange.400" boxSize={3} />
                      <Text fontSize="xs" fontWeight="bold">
                        {user.rating}
                      </Text>
                    </HStack>
                  </HStack>
                ))}
              </VStack>
            </DrawerBody>
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Box
        as="footer"
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        w="full"
        zIndex={10}
        h="140px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        pb="20px"
      >
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="180px"
          zIndex={-1}
          bgImage="url('/images/footer-bg.png')"
          bgSize="100% 100%"
          bgRepeat="no-repeat"
          bgPosition="bottom"
        />

        <HStack w="full" px={6} justify="space-between" align="center" position="relative">
          <Flex 
            w="51px" h="51px" 
            bg={currentView === 'dashboard' ? 'mint.active' : 'transparent'} 
            rounded="full" align="center" justify="center"
            cursor="pointer"
            onClick={() => setCurrentView('dashboard')}
          >
            <Image src="/icons/footer-icon-1.svg" alt="" w="37px" h="37px" />
          </Flex>

          <Flex
            w="51px"
            h="51px"
            align="center"
            justify="center"
            cursor="pointer"
            onClick={() => handleIconClick(2)}
            _hover={{ opacity: 0.8 }}
          >
            <Image src="/icons/footer-icon-2.svg" alt="" w="37px" h="37px" />
          </Flex>

          <Box position="relative" mt="-60px" right="2px">
            <MotionBox
              animate={controls}
              w="82px"
              h="82px"
              bg={currentView === 'matches' ? 'mint.active' : 'white'}
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              shadow="xl"
              cursor="pointer"
              border="4px solid transparent"
              _hover={{ transform: 'scale(1.05)' }}
              transition={{ duration: 0.2 }}
              onClick={handleToggleView}
            >
              <Image src="/icons/footer-icon-3.svg" alt="" w="43px" h="43px" />
            </MotionBox>
          </Box>

          <Flex
            w="51px"
            h="51px"
            align="center"
            justify="center"
            cursor="pointer"
            onClick={() => handleIconClick(4)}
            _hover={{ opacity: 0.8 }}
          >
            <Image src="/icons/footer-icon-4.svg" alt="" w="37px" h="37px" />
          </Flex>

          <Flex
            w="51px"
            h="51px"
            align="center"
            justify="center"
            cursor="pointer"
            onClick={() => handleIconClick(5)}
            _hover={{ opacity: 0.8 }}
          >
            <Image src="/icons/footer-icon-5.svg" alt="" w="37px" h="37px" />
          </Flex>
        </HStack>
      </Box>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent roundedTop="3xl" maxH="80vh">
          <DrawerCloseButton mt={2} />
          {renderDrawerContent()}
        </DrawerContent>
      </Drawer>
    </>
  )
}

AppFooter.displayName = 'AppFooter'
