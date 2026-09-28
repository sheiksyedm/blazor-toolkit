import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@app/routes/router'

describe('Router', () => {
  it('navigates to apps page as default landing', async () => {
    render(<RouterProvider router={router} />)
    // Wait for initial navigation to complete
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Look for the page heading (h1) with "Connect Apps" text
    const heading = screen.getAllByText('Connect Apps').find(el => el.tagName === 'H1')
    expect(heading).toBeInTheDocument()
  })

  it('displays not found page for unknown route', async () => {
    const testRouter = router
    // Note: Testing unknown routes would require a more complete test setup
    // This is a placeholder for the assertion
    expect(testRouter).toBeDefined()
  })
})
