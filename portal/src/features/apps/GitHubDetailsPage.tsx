import React from 'react'
import { PageHeader } from '@components/index'
import { useNavigate } from 'react-router-dom'

export const GitHubDetailsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => navigate('/apps')}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          ← Back to Connect Apps
        </button>
      </div>

      <PageHeader
        title="GitHub"
        subtitle="Connector for GitHub repositories and issues"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Available Actions
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  get_repository
                </h3>
                <p className="text-gray-600 text-sm">
                  Get a GitHub repository
                </p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  list_issues
                </h3>
                <p className="text-gray-600 text-sm">List issues in a repository</p>
              </div>
              <div className="border border-gray-200 rounded p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  create_issue
                </h3>
                <p className="text-gray-600 text-sm">Create a new issue</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Configuration
            </h2>
            <p className="text-gray-600 mb-4">
              This connector is configured for demonstration purposes.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Edit Configuration
            </button>
          </div>
        </div>

        {/* Status Card */}
        <div>
          <div className="bg-white rounded-lg shadow p-6 sticky top-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Status</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Connector Status</p>
                <p className="text-green-600 font-semibold">● Active</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Available Actions</p>
                <p className="font-semibold">3</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Connected Users</p>
                <p className="font-semibold">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
