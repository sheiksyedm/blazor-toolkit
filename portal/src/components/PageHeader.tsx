import React from 'react'

export const PageHeader: React.FC<{
  title: string
  subtitle?: string
  action?: React.ReactNode
}> = ({ title, subtitle, action }) => {
  return (
    <div className="mb-6 border-b border-gray-200 pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>
        {action && <div className="flex items-center gap-2">{action}</div>}
      </div>
    </div>
  )
}
