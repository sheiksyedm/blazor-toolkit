import React from 'react'
import { PageHeader } from '@components/index'

export const AuditPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Audit Trail"
        subtitle="Review execution records and activity logs"
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 text-center">
          <p className="text-gray-600">
            No audit records yet. Execution history will appear here.
          </p>
        </div>
      </div>
    </div>
  )
}
