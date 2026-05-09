'use client'

import { useState } from 'react'
import {
  Box,
  VStack,
  HStack,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { MOCK_NOTIFICATIONS } from '../data/mockNotifications'
import { NotificationCard } from './NotificationCard'
import { NotificationDetailView } from './NotificationDetailView'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const MotionVStack = motion(VStack)
const MotionBox = motion(Box)

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
}

export const NotificationDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedNotif, setSelectedNotif] = useState<string | null>(null)

  const handleClose = () => {
    setSelectedNotif(null)
    onClose()
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={handleClose} size="full">
      <DrawerOverlay />
      <DrawerContent bg="white">
        <DrawerBody px={4} py={8}>
          <AnimatePresence mode="wait">
            {selectedNotif ? (
              <MotionBox
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <NotificationDetailView onBack={() => setSelectedNotif(null)} />
              </MotionBox>
            ) : (
              <MotionBox
                key="list"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                <HStack w="full" justify="space-between" mb={8} px={2}>
                  <Image src="/icons/notif-hamburger.svg" alt="Back" w="50px" h="50px" cursor="pointer" onClick={onClose} />
                  
                  <Menu>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      rightIcon={<Image src="/icons/notif-arrow-down.svg" alt="" w="12px" h="8px" />}
                      fontSize="11px"
                      fontWeight="600"
                      color="#0B1727"
                      fontFamily="Montserrat"
                      _hover={{ bg: 'transparent' }}
                      _active={{ bg: 'transparent' }}
                    >
                      All Notification
                    </MenuButton>
                    <MenuList rounded="xl" shadow="xl" border="none">
                      <MenuItem fontWeight="600" fontSize="11px" fontFamily="Montserrat">Unread</MenuItem>
                      <MenuItem fontWeight="600" fontSize="11px" fontFamily="Montserrat">Mentions</MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>

                {/* List */}
                <MotionVStack spacing="14px" align="stretch" pb={10} variants={containerVariants}>
                  {MOCK_NOTIFICATIONS.map((notif) => (
                    <MotionBox 
                      key={notif.id} 
                      onClick={() => setSelectedNotif(notif.id)} 
                      cursor="pointer"
                      variants={itemVariants}
                      whileTap={{ scale: 0.98 }}
                    >
                      <NotificationCard notification={notif} />
                    </MotionBox>
                  ))}
                </MotionVStack>
              </MotionBox>
            )}
          </AnimatePresence>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
