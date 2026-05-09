import { useState, useCallback } from 'react'
import confetti from 'canvas-confetti'
import { MOCK_USERS } from '../data/mockUsers'

export const useSmartMatches = () => {
  const [index, setIndex] = useState(0)
  const [isCelebrating, setIsCelebrating] = useState(false)
  
  const users = [
    { id: 'jamal', name: 'Jamal Agoro', title: 'CTO AfriLaw', image: '/images/jamal-agoro-image.png' },
    ...MOCK_USERS.map(u => ({ id: u.id, name: u.name, title: u.title, image: u.avatar }))
  ]

  const handleSwipe = useCallback(() => {
    setIndex(prev => (prev + 1) % users.length)
  }, [users.length])

  const handleMatch = useCallback(() => {
    setIsCelebrating(true)
    
    // Left burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x: 0.1, y: 0.5 },
      colors: ['#193E47', '#CCFF00', '#FFFFFF', '#6C5CE7']
    })
    
    // Right burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x: 0.9, y: 0.5 },
      colors: ['#193E47', '#CCFF00', '#FFFFFF', '#6C5CE7']
    })

    setTimeout(() => {
      setIsCelebrating(false)
    }, 1000)
  }, [])

  return {
    users,
    index,
    isCelebrating,
    handleSwipe,
    handleMatch
  }
}
