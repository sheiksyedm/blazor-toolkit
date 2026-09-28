import React from 'react'

export const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Connector Platform
        </h1>
        <p className="text-gray-600 mb-6">
          Sign in with your credentials to continue.
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          Sign In
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">
          This is a placeholder for Bold Identity/OIDC integration
        </p>
      </div>
    </div>
  )
}
