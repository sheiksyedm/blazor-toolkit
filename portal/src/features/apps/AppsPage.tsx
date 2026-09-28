import React from 'react'
import { PageHeader } from '@components/index'
import { Link } from 'react-router-dom'

export const AppsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Connect Apps"
        subtitle="Manage available connectors and connected apps"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* GitHub Card */}
        <Link
          to="/apps/github"
          className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🐙</span>
            <div>
              <h2 className="text-lg font-bold text-gray-900">GitHub</h2>
              <p className="text-sm text-green-600 font-medium">Available</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Connect and manage GitHub repositories and issues
          </p>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">3 actions available</p>
          </div>
        </Link>

        {/* Future providers */}
        <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-6 opacity-50">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📧</span>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Gmail</h2>
              <p className="text-xs text-gray-500">Coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Email integration will be available in future releases
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-6 opacity-50">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💬</span>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Slack</h2>
              <p className="text-xs text-gray-500">Coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Messaging integration will be available in future releases
          </p>
        </div>
      </div>
    </div>
  )
}
