'use client'

import {
  Box,
  HStack,
  Image,
  Button,
} from '@chakra-ui/react'

interface SmartMatchesActionsProps {
  onMatch: () => void
}

export const SmartMatchesActions = ({ onMatch }: SmartMatchesActionsProps) => {
  return (
    <HStack 
      position="absolute" 
      bottom="20%" 
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
        onClick={onMatch}
      >
        Match Us!
      </Button>
    </HStack>
  )
}
