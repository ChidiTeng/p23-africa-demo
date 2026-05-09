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
        <Box position="absolute" inset={0} zIndex={0}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 399 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <g filter="url(#filter0_d_8055_5183)">
              <path
                d="M399 221V18.4617C399 8.26559 390.734 0 380.538 0H108.126C97.0803 0 88.126 8.9543 88.126 20V21.913C88.126 32.9587 79.1717 41.913 68.126 41.913H20C8.95428 41.913 -3.05176e-05 50.8674 -3.05176e-05 61.913V221C-3.05176e-05 232.046 8.95428 241 20 241H379C390.046 241 399 232.046 399 221Z"
                fill="#C1DAD7"
              />
              <path
                d="M399 221V18.4617C399 8.26559 390.734 0 380.538 0H108.126C97.0803 0 88.126 8.9543 88.126 20V21.913C88.126 32.9587 79.1717 41.913 68.126 41.913H20C8.95428 41.913 -3.05176e-05 50.8674 -3.05176e-05 61.913V221C-3.05176e-05 232.046 8.95428 241 20 241H379C390.046 241 399 232.046 399 221Z"
                stroke="#C1DAD7"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_8055_5183"
                x="-4.5"
                y="-3.5"
                width="408"
                height="250"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_8055_5183"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_8055_5183"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_8055_5183"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Box>

        {/* Content Overlay */}
        <Box position="relative" zIndex={1} h="full" w="full" px={6} py={4}>
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
          <Flex h="140px" align="stretch" position="relative">
            {/* Grid Lines */}
            <VStack
              position="absolute"
              inset={0}
              justify="space-between"
              align="stretch"
              zIndex={0}
              py={1}
              pointerEvents="none"
            >
              {Y_LABELS.map((_) => (
                <Box key={_} borderTop="1px dashed" borderColor="rgba(14, 3, 25, 0.1)" w="full" />
              ))}
              <Box borderTop="2px solid" borderColor="dark.900" w="full" />
            </VStack>

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
              <Box h="1px" />
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
                        roundedBottom="full"
                      />
                      <Box
                        position="relative"
                        w="24px"
                        h={`${heightPercent}%`}
                        bg="dark.900"
                        roundedTop="full"
                        roundedBottom="full"
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
      <HStack
        bg="white"
        rounded="full"
        p={1}
        spacing={0}
        shadow="md"
        border="1px solid"
        borderColor="gray.100"
      >
        {(['Directory', 'Smart matches', 'Active Leads'] as Category[]).map((cat) => (
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
    </VStack>
  )
}

ChartSection.displayName = 'ChartSection'
