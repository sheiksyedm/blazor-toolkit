import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@app/routes/router'
import './index.css'

export const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
