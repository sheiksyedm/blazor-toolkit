import React from 'react'

export const ErrorState: React.FC<{
  title?: string
  message: string
  action?: React.ReactNode
}> = ({ title = 'Error', message, action }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-red-50 rounded-lg border border-red-200">
      <div className="text-center">
        <div className="text-red-600 mb-4">
          <svg
            className="w-12 h-12 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-red-900 mb-2">{title}</h3>
        <p className="text-red-700 mb-6">{message}</p>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}
