// Spin/Roulette API endpoints
import apiClient from '../client';
import { Restaurant } from './restaurants';

export interface SpinResult {
  sessionId: string;
  restaurant: Restaurant;
  xpEarned: number;
  coinsEarned: number;
}

export interface SpinRequest {
  category?: string;
  lat?: number;
  lng?: number;
  radius?: number;
}

export const rouletteApi = {
  spin: async (data?: SpinRequest): Promise<SpinResult> => {
    const response = await apiClient.post<SpinResult>('/spin', data);
    return response.data;
  },
};
