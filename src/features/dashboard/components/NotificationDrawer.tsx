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
          {selectedNotif ? (
            <NotificationDetailView onBack={() => setSelectedNotif(null)} />
          ) : (
            <>
              <HStack w="full" justify="space-between" mb={8} px={2}>
                  <Image src="/icons/notif-hamburger.svg" alt="Back" w="50px" h="50px" />
                
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
              <VStack spacing="14px" align="stretch" pb={10}>
                {MOCK_NOTIFICATIONS.map((notif) => (
                  <Box key={notif.id} onClick={() => setSelectedNotif(notif.id)} cursor="pointer">
                    <NotificationCard notification={notif} />
                  </Box>
                ))}
              </VStack>
            </>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
