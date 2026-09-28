import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppShell } from '@app/AppShell'

describe('AppShell', () => {
  beforeEach(() => {
    // Set a larger viewport for header text visibility
    window.matchMedia = (query: string) => ({
      matches: query === '(min-width: 768px)',
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    } as MediaQueryList)
  })

  it('renders the application shell', () => {
    render(
      <MemoryRouter initialEntries={['/apps']}>
        <AppShell />
      </MemoryRouter>,
    )
    expect(screen.getByTestId('app-shell')).toBeInTheDocument()
  })

  it('displays the header', () => {
    render(
      <MemoryRouter initialEntries={['/apps']}>
        <AppShell />
      </MemoryRouter>,
    )
    expect(screen.getByTestId('app-header')).toBeInTheDocument()
  })

  it('displays the sidebar', () => {
    render(
      <MemoryRouter initialEntries={['/apps']}>
        <AppShell />
      </MemoryRouter>,
    )
    expect(screen.getByTestId('app-sidebar')).toBeInTheDocument()
  })

  it('displays product name in header', async () => {
    render(
      <MemoryRouter initialEntries={['/apps']}>
        <AppShell />
      </MemoryRouter>,
    )
    expect(screen.getByText('Connector Platform')).toBeInTheDocument()
  })
})
