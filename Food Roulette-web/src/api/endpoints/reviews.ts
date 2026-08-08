// Reviews API endpoints
import apiClient from '../client';

export interface Review {
  id: string;
  userId: string;
  user: {
    id: string;
    displayNamePrivate: string;
    publicId: string;
    avatarUrl?: string;
  };
  restaurantId?: string;
  restaurant?: {
    id: string;
    name: string;
  };
  rating: number;
  content?: string;
  imageUrl?: string;
  visibility: 'private' | 'friends' | 'public';
  createdAt: string;
}

export interface CreateReviewRequest {
  restaurantId?: string;
  rating: number;
  content?: string;
  imageUrl?: string;
  visibility?: 'private' | 'friends' | 'public';
}

export const reviewApi = {
  list: async (restaurantId?: string): Promise<Review[]> => {
    const response = await apiClient.get<Review[]>('/reviews', { params: { restaurantId } });
    return response.data;
  },

  create: async (data: CreateReviewRequest): Promise<Review> => {
    const response = await apiClient.post<Review>('/reviews', data);
    return response.data;
  },
};
