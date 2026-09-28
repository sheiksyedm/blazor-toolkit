import React from 'react'
import { PageHeader } from '@components/index'

export const ConnectionsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Connections"
        subtitle="Manage user connections and OAuth authorizations"
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 text-center">
          <p className="text-gray-600">
            No connections yet. Connect your GitHub account to get started.
          </p>
        </div>
      </div>
    </div>
  )
}
