'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  useToast,
} from '@chakra-ui/react'

interface NotificationDetailViewProps {
  onBack: () => void
}

export const NotificationDetailView = ({ onBack }: NotificationDetailViewProps) => {
  const toast = useToast()

  const handleCopy = () => {
    const textToCopy = `Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast({
        title: 'Copied to clipboard',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
    })
  }

  return (
    <VStack spacing={6} align="stretch" w="full">
      {/* Top Bar */}
      <HStack w="full" mb={4}>
        <Box 
          cursor="pointer" 
          onClick={onBack}
          w="50px"
          h="50px"
          bg="#EDEFEC"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/icons/notif-hamburger.svg" alt="Back" w="24px" h="24px" />
        </Box>
      </HStack>

      {/* Content Card */}
      <Box
        bg="#C4CAC254"
        rounded="25.39px"
        p="30px"
        w="full"
        maxW="430px"
        minH="274px"
        mx="auto"
      >
        <VStack align="start" spacing={6}>
          <Text 
            fontFamily="Montserrat" 
            fontWeight="400" 
            fontSize="15px" 
            color="#0D1A34CC"
            lineHeight="1.4"
          >
            Lorem ipsum dolor sit amet, 
          </Text>
          <Text 
            fontFamily="Montserrat" 
            fontWeight="400" 
            fontSize="15px" 
            color="#0D1A34CC"
            lineHeight="1.4"
          >
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          </Text>
          <Text 
            fontFamily="Montserrat" 
            fontWeight="400" 
            fontSize="15px" 
            color="#0D1A34CC"
            lineHeight="1.4"
          >
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text 
            fontFamily="Montserrat" 
            fontWeight="400" 
            fontSize="15px" 
            color="#0D1A34CC"
            lineHeight="1.4"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </VStack>
      </Box>

      {/* Action Buttons */}
      <HStack spacing={4} mt={4} justify="center">
        <Box cursor="pointer" _hover={{ opacity: 0.8 }}>
          <Image src="/icons/left-arrow-icon.svg" alt="" w="58px" h="68px" />
        </Box>
        <Box cursor="pointer" _hover={{ opacity: 0.8 }}>
          <Image src="/icons/right-arrow-icon.svg" alt="" w="58px" h="68px" />
        </Box>
        <Box cursor="pointer" _hover={{ opacity: 0.8 }} onClick={handleCopy}>
          <Image src="/icons/copy-icon.svg" alt="" w="58px" h="68px" />
        </Box>
        
        <Button
          flex={1}
          bg="#0B1727"
          color="white"
          rounded="full"
          h="68px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
          _hover={{ opacity: 0.9 }}
          _active={{ transform: 'scale(0.98)' }}
          shadow="lg"
        >
          Start a Chat
        </Button>
      </HStack>
    </VStack>
  )
}

NotificationDetailView.displayName = 'NotificationDetailView'
