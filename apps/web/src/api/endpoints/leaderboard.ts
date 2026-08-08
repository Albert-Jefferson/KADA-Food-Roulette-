// Leaderboard API endpoints
import apiClient from '../client';

export interface LeaderboardEntry {
  rank: number;
  user: {
    id: string;
    displayNamePrivate: string;
    publicId: string;
    avatarUrl?: string;
  };
  xp: number;
  streakDays: number;
}

export type LeaderboardType = 'xp' | 'streak';

export const leaderboardApi = {
  get: async (type: LeaderboardType = 'xp', limit = 50): Promise<LeaderboardEntry[]> => {
    const response = await apiClient.get<LeaderboardEntry[]>('/leaderboard', {
      params: { type, limit },
    });
    return response.data;
  },
};
