'use client'

import { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import { MOCK_API_RESPONSE, Category, Timeframe } from '../data/mockChartData'

import { ChartBackground } from './ChartBackground'
import { CategoryToggle } from './CategoryToggle'

const Y_LABELS = ['100%', '75%', '50%', '25%']

export const ChartSection = () => {
  const [category, setCategory] = useState<Category>('Smart matches')
  const [timeframe, setTimeframe] = useState<Timeframe>('7 days')
  
  const chartData = MOCK_API_RESPONSE[category][timeframe]
  const maxValue = 100

  return (
    <VStack spacing={6} w="full" align="stretch">
      <Box position="relative" w="full" h="241px">
        {/* Background SVG */}
        <ChartBackground />

        <Box position="relative" zIndex={1} h="full" w="full" px={2} py={4}>
         
          {/* Top Row: Navigation Pills */}
          <HStack spacing={4} mb={6}>
            <Menu placement="bottom-start" offset={[12, 10]}>
              <MenuButton
                as={Box}
                bg="purple.active"
                px={4}
                py={2}
                rounded="full"
                cursor="pointer"
                ml="-12px"
                mt="-10px"
                _hover={{ opacity: 0.8 }}
                transition="all 0.2s"
              >
                <HStack spacing={2}>
                  <Text fontSize="11px" fontWeight="700" color="#262A27">
                    More
                  </Text>
                  <Icon as={FaChevronDown} boxSize="8px" color="#262A27" />
                </HStack>
              </MenuButton>
              <Portal>
                <MenuList
                  bg="white"
                  border="none"
                  shadow="xl"
                  rounded="xl"
                  zIndex={9999}
                  minW="140px"
                  p={1}
                >
                  {(['30 days', '6 months', '1 year'] as Timeframe[]).map((tf) => (
                    <MenuItem
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      fontSize="12px"
                      fontWeight="600"
                      color="dark.900"
                      rounded="md"
                      _hover={{ bg: 'purple.active' }}
                    >
                      Last {tf}
                    </MenuItem>
                  ))}
                  <MenuItem
                    onClick={() => setTimeframe('7 days')}
                    fontSize="12px"
                    fontWeight="600"
                    color="dark.900"
                    rounded="md"
                    _hover={{ bg: 'purple.active' }}
                  >
                    Reset to 7 days
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>

            <Box
              bg="white"
              px={6}
              py={2}
              rounded="full"
              mt="-10px"
              shadow="sm"
            >
              <Text fontSize="11px" fontWeight="700" color="dark.900" textTransform="capitalize">
                {timeframe}
              </Text>
            </Box>
          </HStack>

          {/* Chart Area */}
          <Flex h="170px" align="stretch" position="relative">
            {/* Grid Lines */}
            <VStack
              position="absolute"
              inset={0}
              bottom="20px" // Align with the bottom of the bars (above labels)
              justify="space-between"
              align="stretch"
              zIndex={0}
              py={1}
              pointerEvents="none"
            >
              {Y_LABELS.map((_) => (
                <Box key={_} borderTop="1px dashed" borderColor="rgba(14, 3, 25, 0.1)" w="full" />
              ))}
            </VStack>

            {/* Baseline */}
            <Box
              position="absolute"
              bottom="20px"
              left="35px"
              right={0}
              borderTop="2px solid"
              borderColor="dark.900"
              zIndex={2}
            />

            {/* Y-Axis Labels */}
            <VStack
              align="start"
              justify="space-between"
              h="full"
              zIndex={1}
              pr={4}
              pointerEvents="none"
            >
              {Y_LABELS.map((label) => (
                <Text
                  key={label}
                  fontSize="9px"
                  color="dark.900"
                  fontWeight="700"
                  opacity={0.8}
                >
                  {label}
                </Text>
              ))}
              <Box h="12px" />
            </VStack>

            {/* Bars Container */}
            <HStack flex={1} align="end" justify="space-around" h="full" zIndex={1}>
              {chartData.map(({ label, value }) => {
                const heightPercent = (value / maxValue) * 100
                return (
                  <VStack key={label} flex={1} h="full" justify="end" spacing={2}>
                    <Flex
                      direction="column"
                      justify="end"
                      align="center"
                      flex={1}
                      w="full"
                      position="relative"
                    >
                      <Box
                        position="absolute"
                        bottom={0}
                        w="24px"
                        h="85%"
                        bg="rgba(14, 3, 25, 0.1)"
                        roundedTop="full"
                        roundedBottom="none"
                      />
                      <Box
                        position="relative"
                        w="24px"
                        h={`${heightPercent}%`}
                        bg="dark.900"
                        roundedTop="full"
                        roundedBottom="none"
                        transition="height 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                        display="flex"
                        alignItems="start"
                        justifyContent="center"
                        pt={2}
                      >
                        <Text
                          fontSize="8px"
                          color="white"
                          fontWeight="700"
                          opacity={value > 20 ? 1 : 0}
                        >
                          {value}%
                        </Text>
                      </Box>
                    </Flex>
                    <Text fontSize="9px" color="dark.900" fontWeight="600">
                      {label}
                    </Text>
                  </VStack>
                )
              })}
            </HStack>
          </Flex>
        </Box>
      </Box>

      {/* Toggle Pills */}
      <CategoryToggle category={category} setCategory={setCategory} />
    </VStack>
  )
}

ChartSection.displayName = 'ChartSection'
