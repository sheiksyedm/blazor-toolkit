import React from 'react'
import { PageHeader } from '@components/index'

export const TestActionsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Test Actions"
        subtitle="Execute and test connector actions with sample data"
      />

      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Select User
            </label>
            <select className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select a user...</option>
              <option>Alice</option>
              <option>Bob</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Select Connector
            </label>
            <select className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select a connector...</option>
              <option>GitHub</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Select Action
            </label>
            <select className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select an action...</option>
              <option>get_repository</option>
              <option>list_issues</option>
              <option>create_issue</option>
            </select>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Execute Action
          </button>
        </div>
      </div>
    </div>
  )
}
