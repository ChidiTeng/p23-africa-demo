'use client'

import {
  Box,
  Text,
  VStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

export const SmartMatchesHeader = () => {
  return (
    <Box 
      w="full" 
      h="72px" 
      bg="#193E47" 
      borderBottom="0.5px solid rgba(255,255,255,0.1)"
      px="30px"
      py="16px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      zIndex={10}
      position="relative"
    >
      <VStack align="start" spacing={0}>
        <Text color="white" fontSize="xs" opacity={0.8}>Your Smart</Text>
        <Text color="white" fontSize="xl" fontWeight="800">Matches</Text>
      </VStack>

      <InputGroup maxW="180px" size="sm">
        <Input 
          bg="rgba(255,255,255,0.1)" 
          border="none" 
          rounded="full" 
          placeholder="Search" 
          color="white"
          _placeholder={{ color: 'white', opacity: 0.5 }}
        />
        <InputRightElement>
          <Image src="/icons/search-icon.svg" alt="" w="18px" h="18px" />
        </InputRightElement>
      </InputGroup>

      <Image src="/icons/refresh-icon.svg" alt="" w="30px" h="30px" cursor="pointer" />
    </Box>
  )
}
