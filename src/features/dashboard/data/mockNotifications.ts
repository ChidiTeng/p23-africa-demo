export interface Notification {
  id: string
  name: string
  avatar: string
  subtitle: string
  content: string
  time: string
  type: 'bell' | 'card' | 'people'
}

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    name: 'Amina Diop',
    avatar: '/images/amina-diop.jpg',
    subtitle: 'Lorem ipsum dolor sit',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '8h02',
    type: 'bell',
  },
  {
    id: '2',
    name: 'Amina Diop',
    avatar: '/images/amina-diop.jpg',
    subtitle: 'Deal Card Request',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '8h02',
    type: 'card',
  },
  {
    id: '3',
    name: 'Stéphane Williams',
    avatar: '/images/user-avatar.png',
    subtitle: 'Connection Notification',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '8h02',
    type: 'people',
  },
  {
    id: '4',
    name: 'Flag Alert',
    avatar: '/icons/flag-red.png',
    subtitle: 'Lorem ipsum dolor sit',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '8h02',
    type: 'bell',
  },
  {
    id: '5',
    name: 'Amina Diop',
    avatar: '/images/amina-diop.jpg',
    subtitle: 'Lorem ipsum dolor sit',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '8h02',
    type: 'bell',
  },
]
