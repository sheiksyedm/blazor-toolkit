import { describe, it, expect } from 'vitest'
import { MockSessionService } from '@services/mock/MockSessionService'

describe('MockSessionService', () => {
  it('returns mock tenant and user context', async () => {
    const service = new MockSessionService()
    const session = await service.getSession()

    expect(session.user.name).toBe('Alex Administrator')
    expect(session.tenant.name).toBe('Acme Corporation')
    expect(session.isAuthenticated).toBe(true)
  })

  it('returns user information', async () => {
    const service = new MockSessionService()
    const user = await service.getUser()

    expect(user.name).toBe('Alex Administrator')
    expect(user.role).toBe('admin')
    expect(user.email).toBe('alex@acme.com')
  })

  it('returns tenant information', async () => {
    const service = new MockSessionService()
    const tenant = await service.getTenant()

    expect(tenant.name).toBe('Acme Corporation')
    expect(tenant.environment).toBe('hackathon')
  })

  it('indicates authenticated status', () => {
    const service = new MockSessionService()
    expect(service.isAuthenticated()).toBe(true)
  })
})
