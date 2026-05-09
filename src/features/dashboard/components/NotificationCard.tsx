'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Avatar,
  Image,
} from '@chakra-ui/react'
import { Notification } from '../data/mockNotifications'

interface NotificationCardProps {
  notification: Notification
}

export const NotificationCard = ({ notification }: NotificationCardProps) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'card': return '/icons/deal-card-icon.svg'
      case 'people': return '/icons/connection-notif-green-icon.png'
      default: return '/icons/notif-yellow-icon.svg'
    }
  }

  return (
    <Box
      bg="#ECEEEB"
      rounded="25.39px"
      p="18px"
      w="full"
      maxW="409px"
      mx="auto"
      minH="106px"
      shadow="sm"
      position="relative"
    >
      <HStack spacing={4} align="start">
        <Avatar 
          w="62px" 
          h="62px" 
          src={notification.avatar} 
          name={notification.name} 
          border="2px solid white" 
        />
        
        <VStack align="start" flex={1} spacing={0}>
          <HStack w="full" justify="space-between" align="start">
            <VStack align="start" spacing={0} pt={1}>
              <Text 
                fontWeight="700" 
                fontSize="20px" 
                color="#0B1727" 
                fontFamily="Montserrat"
                lineHeight="100%"
              >
                {notification.name}
              </Text>
              <Text 
                fontWeight="500" 
                fontSize="11px" 
                color="#0B1727" 
                fontFamily="Montserrat"
                lineHeight="100%"
                mt="4px"
              >
                {notification.subtitle}
              </Text>
            </VStack>
            
            <Image 
              src={getIcon()} 
              alt="" 
              w="36px" 
              h="35px" 
              mt={1}
            />
          </HStack>

          <Text 
            fontSize="9px" 
            color="#0D1A34CC" 
            fontFamily="Montserrat"
            lineHeight="100%" 
            mt="10px"
            maxW="260px"
          >
            {notification.content}
          </Text>
          
          <Text 
            w="full" 
            textAlign="right" 
            fontSize="12px" 
            fontWeight="400" 
            color="#0B1727" 
            opacity={0.6}
            mt="8px"
          >
            {notification.time}
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}

NotificationCard.displayName = 'NotificationCard'
