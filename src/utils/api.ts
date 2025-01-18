import { getAuthToken } from './auth';

const API_URL = import.meta.env.VITE_API_URL;

interface ApiOptions extends RequestInit {
  requireAuth?: boolean;
}

export async function apiRequest(endpoint: string, options: ApiOptions = {}) {
  const { requireAuth = true, headers = {}, ...rest } = options;

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };

  if (requireAuth) {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Authentication required');
    }
    requestHeaders.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: requestHeaders,
    ...rest,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}
