export function getAuthToken(): string | null {
  return localStorage.getItem('authToken');
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}
