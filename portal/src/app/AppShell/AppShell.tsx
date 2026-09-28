import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

export const AppShell: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const isAuthenticatedPage = !['/', '/login'].includes(location.pathname)

  if (!isAuthenticatedPage) {
    return <Outlet />
  }

  return (
    <div className="flex h-screen bg-gray-50" data-testid="app-shell">
      {/* Sidebar */}
      <AppSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AppHeader onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            {/* Skip to content link for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-2 focus:bg-blue-600 focus:text-white"
            >
              Skip to main content
            </a>
            <div id="main-content">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
