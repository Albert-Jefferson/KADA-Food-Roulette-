// Friends API endpoints
import apiClient from '../client';

export interface Friendship {
  id: string;
  requesterId: string;
  requester: {
    id: string;
    displayNamePrivate: string;
    publicId: string;
    avatarUrl?: string;
  };
  addresseeId: string;
  addressee: {
    id: string;
    displayNamePrivate: string;
    publicId: string;
    avatarUrl?: string;
  };
  status: 'pending' | 'accepted' | 'blocked';
  createdAt: string;
}

export interface User {
  id: string;
  displayNamePrivate: string;
  displayNamePublic: string;
  publicId: string;
  avatarUrl?: string;
}

export const friendsApi = {
  list: async (status?: 'pending' | 'accepted'): Promise<Friendship[]> => {
    const response = await apiClient.get<Friendship[]>('/friendships', { params: { status } });
    return response.data;
  },

  request: async (addresseeId: string): Promise<Friendship> => {
    const response = await apiClient.post<Friendship>('/friendships', { addresseeId });
    return response.data;
  },

  accept: async (friendshipId: string): Promise<Friendship> => {
    const response = await apiClient.post<Friendship>(`/friendships/${friendshipId}/accept`);
    return response.data;
  },

  reject: async (friendshipId: string): Promise<void> => {
    await apiClient.post(`/friendships/${friendshipId}/reject`);
  },
};
