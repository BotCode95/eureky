import { apiClient } from './client';
import type { AuthResponse, LoginRequest, RegisterRequest, User } from './types';

export const authApi = {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const data = await apiClient.post<AuthResponse>('/api/auth/login', credentials);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
  },

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const data = await apiClient.post<AuthResponse>('/api/auth/register', userData);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
  },

  async getProfile(): Promise<User> {
    return apiClient.get<User>('/api/auth/profile', true);
  },

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
};
