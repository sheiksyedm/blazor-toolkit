import React, { useEffect, useState } from 'react'
import { getSessionService } from '@services/index'
import { Tenant, User } from '@services/contracts/session'

export const AppHeader: React.FC<{ onSidebarToggle: () => void }> = ({
  onSidebarToggle,
}) => {
  const [tenant, setTenant] = useState<Tenant | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSession = async () => {
      try {
        const sessionService = getSessionService()
        const [tenantData, userData] = await Promise.all([
          sessionService.getTenant(),
          sessionService.getUser(),
        ])
        setTenant(tenantData)
        setUser(userData)
      } catch (error) {
        console.error('Failed to load session:', error)
      } finally {
        setLoading(false)
      }
    }
    loadSession()
  }, [])

  return (
    <header
      className="bg-white border-b border-gray-200 shadow-sm"
      data-testid="app-header"
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onSidebarToggle}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900 hidden md:block">
            Connector Platform
          </h1>
        </div>

        <div className="flex items-center gap-6">
          {!loading && tenant && (
            <div className="text-right text-sm">
              <p className="text-gray-600">Tenant: {tenant.name}</p>
              <p className="text-gray-500 text-xs">
                Environment: {tenant.environment}
              </p>
            </div>
          )}

          {!loading && user && (
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <div className="text-right text-sm">
                <p className="text-gray-900 font-medium">{user.name}</p>
                <p className="text-gray-500 text-xs capitalize">{user.role}</p>
              </div>
              <button
                className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold"
                title={user.name}
                aria-label={`User profile for ${user.name}`}
              >
                {user.name.charAt(0)}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
