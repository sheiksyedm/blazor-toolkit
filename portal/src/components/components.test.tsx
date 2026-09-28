import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadingState, EmptyState, ErrorState, PageHeader } from '@components/index'

describe('Shared Components', () => {
  describe('LoadingState', () => {
    it('displays loading message', () => {
      render(<LoadingState message="Loading data..." />)
      expect(screen.getByText('Loading data...')).toBeInTheDocument()
    })

    it('uses default message if not provided', () => {
      render(<LoadingState />)
      expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
  })

  describe('EmptyState', () => {
    it('displays title and message', () => {
      render(
        <EmptyState title="No data" message="There is no data to display" />,
      )
      expect(screen.getByText('No data')).toBeInTheDocument()
      expect(screen.getByText('There is no data to display')).toBeInTheDocument()
    })
  })

  describe('ErrorState', () => {
    it('displays error message', () => {
      render(<ErrorState message="An error occurred" />)
      expect(screen.getByText('Error')).toBeInTheDocument()
      expect(screen.getByText('An error occurred')).toBeInTheDocument()
    })
  })

  describe('PageHeader', () => {
    it('displays title', () => {
      render(<PageHeader title="Test Page" />)
      expect(screen.getByText('Test Page')).toBeInTheDocument()
    })

    it('displays title and subtitle', () => {
      render(<PageHeader title="Test Page" subtitle="This is a test" />)
      expect(screen.getByText('Test Page')).toBeInTheDocument()
      expect(screen.getByText('This is a test')).toBeInTheDocument()
    })
  })
})
