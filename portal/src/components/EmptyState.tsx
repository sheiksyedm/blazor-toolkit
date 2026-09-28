import React from 'react'

export const EmptyState: React.FC<{
  title: string
  message?: string
  action?: React.ReactNode
}> = ({ title, message, action }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        {message && <p className="text-gray-600 mb-6">{message}</p>}
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}
