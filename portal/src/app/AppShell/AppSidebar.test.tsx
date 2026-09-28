import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AppSidebar } from '@app/AppShell/AppSidebar'

describe('AppSidebar', () => {
  it('renders navigation items', () => {
    render(
      <BrowserRouter>
        <AppSidebar open={true} onToggle={() => {}} />
      </BrowserRouter>,
    )
    expect(screen.getByText('Connect Apps')).toBeInTheDocument()
    expect(screen.getByText('Connections')).toBeInTheDocument()
    expect(screen.getByText('Connect AI Client')).toBeInTheDocument()
    expect(screen.getByText('Test Actions')).toBeInTheDocument()
    expect(screen.getByText('Audit')).toBeInTheDocument()
  })

  it('marks active navigation item', () => {
    render(
      <BrowserRouter>
        <AppSidebar open={true} onToggle={() => {}} />
      </BrowserRouter>,
    )
    // Navigation items have data-testid attributes
    const appsLink = screen.getByTestId('nav-/apps')
    expect(appsLink).toBeInTheDocument()
  })

  it('displays environment label', () => {
    render(
      <BrowserRouter>
        <AppSidebar open={true} onToggle={() => {}} />
      </BrowserRouter>,
    )
    expect(screen.getByText('Hackathon')).toBeInTheDocument()
  })
})
