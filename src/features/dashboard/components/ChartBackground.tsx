'use client'

import { Box } from '@chakra-ui/react'

export const ChartBackground = () => {
  return (
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
  )
}

ChartBackground.displayName = 'ChartBackground'
