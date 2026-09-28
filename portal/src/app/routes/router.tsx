import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppShell } from '@app/AppShell'
import { LoginPage } from '@features/auth/LoginPage'
import { AppsPage } from '@features/apps/AppsPage'
import { GitHubDetailsPage } from '@features/apps/GitHubDetailsPage'
import { ConnectionsPage } from '@features/connections/ConnectionsPage'
import { AIClientsPage } from '@features/ai-clients/AIClientsPage'
import { TestActionsPage } from '@features/test-actions/TestActionsPage'
import { AuditPage } from '@features/audit/AuditPage'
import { NotFoundPage } from './NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/apps" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'apps',
        element: <AppsPage />,
      },
      {
        path: 'apps/github',
        element: <GitHubDetailsPage />,
      },
      {
        path: 'connections',
        element: <ConnectionsPage />,
      },
      {
        path: 'ai-clients',
        element: <AIClientsPage />,
      },
      {
        path: 'ai-clients/:clientId',
        element: <AIClientsPage />,
      },
      {
        path: 'test-actions',
        element: <TestActionsPage />,
      },
      {
        path: 'audit',
        element: <AuditPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
