// mocks/scenarios/auth-scenarios.ts
export const AuthScenarios = {
  loggedOut: { user: null, isLoading: false },
  loggedIn: { user: mockUsers.viewer, isLoading: false },
  loading: { user: null, isLoading: true },
};