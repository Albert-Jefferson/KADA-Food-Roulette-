// Check-in API endpoints
import apiClient from '../client';

export interface CheckIn {
  id: string;
  userId: string;
  restaurantId?: string;
  restaurant?: {
    id: string;
    name: string;
  };
  gpsLat: number;
  gpsLng: number;
  verified: boolean;
  expiresAt: string;
  createdAt: string;
}

export interface CreateCheckInRequest {
  restaurantId?: string;
  gpsLat: number;
  gpsLng: number;
}

export const checkinApi = {
  create: async (data: CreateCheckInRequest): Promise<CheckIn> => {
    const response = await apiClient.post<CheckIn>('/checkin', data);
    return response.data;
  },

  verify: async (checkInId: string): Promise<{ verified: boolean }> => {
    const response = await apiClient.post<{ verified: boolean }>(`/checkin/verify`, { checkInId });
    return response.data;
  },
};
