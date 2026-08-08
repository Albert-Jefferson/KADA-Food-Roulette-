// Auth API endpoints
import apiClient from '../client';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  displayNamePrivate: string;
  displayNamePublic: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    displayNamePrivate: string;
    displayNamePublic: string;
    publicId: string;
    avatarUrl?: string;
    xp: number;
    streakDays: number;
    coins: number;
    role: 'USER' | 'STEWARD' | 'ADMIN';
  };
}

export interface UserProfile {
  id: string;
  email: string;
  displayNamePrivate: string;
  displayNamePublic: string;
  publicId: string;
  avatarUrl?: string;
  xp: number;
  streakDays: number;
  coins: number;
  role: 'USER' | 'STEWARD' | 'ADMIN';
  createdAt: string;
}

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/register', data);
    return response.data;
  },

  me: async (): Promise<UserProfile> => {
    const response = await apiClient.get<UserProfile>('/auth/me');
    return response.data;
  },

  google: async (idToken: string): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/google', { idToken });
    return response.data;
  },
};
