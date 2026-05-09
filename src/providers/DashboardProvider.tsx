'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

interface DashboardContextType {
  refreshTrigger: number
  refreshUsers: () => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const refreshUsers = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1)
  }, [])

  return (
    <DashboardContext.Provider value={{ refreshTrigger, refreshUsers }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}
