export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'developer' | 'user'
}

export interface Tenant {
  id: string
  name: string
  environment: 'hackathon' | 'staging' | 'production'
}

export interface SessionContext {
  user: User
  tenant: Tenant
  isAuthenticated: boolean
}

export interface ISessionService {
  getSession(): Promise<SessionContext>
  getUser(): Promise<User>
  getTenant(): Promise<Tenant>
  isAuthenticated(): boolean
  logout(): Promise<void>
}
