import { SessionContext, ISessionService, User, Tenant } from '@services/contracts/session'

const mockTenant: Tenant = {
  id: 'tenant-001',
  name: 'Acme Corporation',
  environment: 'hackathon',
}

const mockUser: User = {
  id: 'user-001',
  name: 'Alex Administrator',
  email: 'alex@acme.com',
  role: 'admin',
}

const mockSession: SessionContext = {
  user: mockUser,
  tenant: mockTenant,
  isAuthenticated: true,
}

export class MockSessionService implements ISessionService {
  async getSession(): Promise<SessionContext> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockSession), 100)
    })
  }

  async getUser(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockUser), 100)
    })
  }

  async getTenant(): Promise<Tenant> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockTenant), 100)
    })
  }

  isAuthenticated(): boolean {
    return mockSession.isAuthenticated
  }

  async logout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 100)
    })
  }
}
