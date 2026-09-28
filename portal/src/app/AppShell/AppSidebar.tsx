import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavItem {
  label: string
  path: string
  icon: string
}

const navItems: NavItem[] = [
  { label: 'Connect Apps', path: '/apps', icon: '🔗' },
  { label: 'Connections', path: '/connections', icon: '🔐' },
  { label: 'Connect AI Client', path: '/ai-clients', icon: '🤖' },
  { label: 'Test Actions', path: '/test-actions', icon: '⚙️' },
  { label: 'Audit', path: '/audit', icon: '📋' },
]

export const AppSidebar: React.FC<{ open: boolean; onToggle: () => void }> = ({
  open,
}) => {
  const location = useLocation()

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`${
          open ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 flex flex-col overflow-y-auto`}
        data-testid="app-sidebar"
      >
        <div className="p-4 border-b border-gray-700">
          <h2 className={`font-bold ${open ? 'text-lg' : 'text-xs text-center'}`}>
            {open ? 'Portal' : '📱'}
          </h2>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
                title={item.label}
                data-testid={`nav-${item.path}`}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                {open && (
                  <span className="flex-1">
                    {item.label}
                    {isActive && (
                      <span className="sr-only"> (current page)</span>
                    )}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div
            className={`text-xs text-gray-400 ${open ? '' : 'text-center'}`}
          >
            {open && <p>Environment</p>}
            <p className="font-semibold text-gray-300">Hackathon</p>
          </div>
        </div>
      </aside>
    </>
  )
}
