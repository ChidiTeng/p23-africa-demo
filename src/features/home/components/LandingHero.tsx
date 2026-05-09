'use client'

import { VStack, Heading, Text, Stack, Button, Icon, Container } from '@chakra-ui/react'
import { FaRocket, FaGithub } from 'react-icons/fa'

export const LandingHero = () => {
  return (
    <Container maxW="container.lg">
      <Stack spacing={12} align="center" textAlign="center">
        <VStack spacing={4}>
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, blue.400, teal.400)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Africa Demo Project
          </Heading>
          <Text fontSize="xl" color="gray.500" maxW="2xl">
            A high-performance Next.js application powered by Chakra UI v2, TypeScript, and React Icons.
          </Text>
        </VStack>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button
            size="lg"
            colorScheme="blue"
            leftIcon={<Icon as={FaRocket} />}
            px={8}
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            leftIcon={<Icon as={FaGithub} />}
            px={8}
          >
            View Source
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}
