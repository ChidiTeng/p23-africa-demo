'use client'

import { Box, HStack, Text } from '@chakra-ui/react'
import { Category } from '../data/mockChartData'

interface CategoryToggleProps {
  category: Category
  setCategory: (category: Category) => void
}

export const CategoryToggle = ({ category, setCategory }: CategoryToggleProps) => {
  const categories: Category[] = ['Directory', 'Smart matches', 'Active Leads']

  return (
    <HStack
      bg="white"
      rounded="full"
      p={1}
      spacing={0}
      shadow="md"
      border="1px solid"
      borderColor="gray.100"
    >
      {categories.map((cat) => (
        <Box
          key={cat}
          flex={1}
          py={3}
          px={4}
          rounded="full"
          bg={category === cat ? 'purple.active' : 'transparent'}
          cursor="pointer"
          transition="all 0.3s"
          onClick={() => setCategory(cat)}
          textAlign="center"
        >
          <Text
            fontSize="12px"
            fontWeight={category === cat ? '700' : '400'}
            color={category === cat ? '#262A27' : '#000000'}
            lineHeight="100%"
          >
            {cat}
          </Text>
        </Box>
      ))}
    </HStack>
  )
}

CategoryToggle.displayName = 'CategoryToggle'
