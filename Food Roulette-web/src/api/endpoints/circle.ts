import apiClient from '../client';
import { MenuItem } from './menu';

export interface MemberScore {
  userId: string;
  userName: string;
  topItem: MenuItem;
  matchScore: number;
  reasons: string[];
  alternativeItems: MenuItem[];
}

export interface CircleRecommendation {
  id: string;
  groupId: string;
  spinSessionId?: string;
  menuId?: string;
  memberScores: MemberScore[];
  createdAt: string;
}

export const circleApi = {
  recommendCircle: async (
    groupId: string,
    menuItems: MenuItem[],
    spinSessionId?: string
  ): Promise<CircleRecommendation> => {
    const response = await apiClient.post<CircleRecommendation>('/circle/recommend', {
      groupId,
      menuItems,
      spinSessionId,
    });
    return response.data;
  },

  getRecommendationById: async (id: string): Promise<CircleRecommendation> => {
    const response = await apiClient.get<CircleRecommendation>(`/circle/recommendation/${id}`);
    return response.data;
  },
};
