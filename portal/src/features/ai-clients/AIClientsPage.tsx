import React from 'react'
import { PageHeader } from '@components/index'
import { useParams } from 'react-router-dom'

export const AIClientsPage: React.FC = () => {
  const { clientId } = useParams<{ clientId?: string }>()

  if (clientId) {
    return (
      <div>
        <PageHeader
          title={`AI Client: ${clientId}`}
          subtitle="Configure and manage MCP-capable AI client connections"
        />

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                MCP Endpoint
              </h2>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm break-all">
                http://localhost:5000/api/v1/mcp/streamable
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Enabled Tools
              </h2>
              <ul className="space-y-2">
                <li className="text-gray-600">• github_get_repository</li>
                <li className="text-gray-600">• github_list_issues</li>
                <li className="text-gray-600">• github_create_issue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        title="Connect AI Client"
        subtitle="Setup MCP-capable clients to use connector actions"
      />

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">
          External AI clients can connect via Model Context Protocol (MCP) to
          access available connector actions.
        </p>
        <p className="text-sm text-gray-500">
          Configure your MCP client to connect to the endpoint displayed on the
          client details page.
        </p>
      </div>
    </div>
  )
}
