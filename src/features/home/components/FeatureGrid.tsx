'use client'

import { Flex, VStack, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { FaRocket, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiChakraui } from 'react-icons/si'

interface FeatureProps {
  icon: any
  label: string
  color: string
}

const FeatureIcon = ({ icon, label, color }: FeatureProps) => {
  return (
    <VStack
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      rounded="xl"
      shadow="md"
      w="140px"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
    >
      <Icon as={icon} boxSize={8} color={color} />
      <Text fontWeight="bold" fontSize="sm">
        {label}
      </Text>
    </VStack>
  )
}

export const FeatureGrid = () => {
  return (
    <Flex gap={8} wrap="wrap" justify="center">
      <FeatureIcon icon={SiNextdotjs} label="Next.js" color="black" />
      <FeatureIcon icon={SiChakraui} label="Chakra UI" color="teal.500" />
      <FeatureIcon icon={FaReact} label="React" color="blue.400" />
      <FeatureIcon icon={FaRocket} label="Performance" color="purple.500" />
    </Flex>
  )
}
