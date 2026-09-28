import { ISessionService } from '@services/contracts/session'
import { MockSessionService } from '@services/mock/MockSessionService'

let sessionService: ISessionService | null = null

export function createSessionService(): ISessionService {
  // For the foundation phase, use mock service
  // In future phases, switch to HTTP adapter based on environment
  return new MockSessionService()
}

export function getSessionService(): ISessionService {
  if (!sessionService) {
    sessionService = createSessionService()
  }
  return sessionService
}
