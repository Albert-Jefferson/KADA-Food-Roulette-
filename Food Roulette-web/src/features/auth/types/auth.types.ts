export interface AuthState {
  isAuthenticated: boolean;
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
  } | null;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  displayNamePrivate: string;
  displayNamePublic: string;
}
