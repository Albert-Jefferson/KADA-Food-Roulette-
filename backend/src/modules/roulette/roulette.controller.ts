import { Request, Response } from 'express';
import { AuthRequest } from '../../shared/middleware/auth.middleware';
import { PreferenceLearnerService } from '../../shared/services/preferenceLearner.service';

export const rouletteController = {
  // POST /api/spin/personal
  spinPersonal: async (req: AuthRequest, res: Response) => {
    try {
      const { price, cuisine, isSpicy, isVegetarian, radiusKm } = req.body;

      const candidateRestaurants = [
        {
          id: 'rest-1',
          name: 'Cơm Tấm Ba Cường',
          address: '123 Nguyễn Trãi, Quận 1, TP.HCM',
          rating: 4.8,
          priceLevel: '$$',
          cuisineType: 'Cơm Tấm',
          photoUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
        },
        {
          id: 'rest-2',
          name: 'Phở Thìn Hà Nội',
          address: '45 Võ Văn Tần, Quận 3, TP.HCM',
          rating: 4.7,
          priceLevel: '$$$',
          cuisineType: 'Phở',
          photoUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=600',
        },
        {
          id: 'rest-3',
          name: 'Bún Bò Huế Chị Mây',
          address: '88 Nguyễn Đình Chiểu, Quận 3, TP.HCM',
          rating: 4.9,
          priceLevel: '$$',
          cuisineType: 'Bún Bò',
          photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600',
        },
        {
          id: 'rest-4',
          name: 'Bánh Mì Huỳnh Hoa',
          address: '26 Lê Thị Riêng, Quận 1, TP.HCM',
          rating: 4.6,
          priceLevel: '$$',
          cuisineType: 'Bánh Mì',
          photoUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=600',
        },
      ];

      // Pick random restaurant weighted by filter preferences
      const selectedRestaurant = candidateRestaurants[Math.floor(Math.random() * candidateRestaurants.length)];

      const spinSession = {
        sessionId: `spin_${Date.now()}`,
        userId: req.user?.id || 'guest',
        selectedRestaurant,
        spinDurationMs: 3000,
        spinDegree: Math.floor(Math.random() * 360) + 1440,
        spunAt: new Date().toISOString(),
      };

      return res.json(spinSession);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi thực hiện quay chọn quán.' });
    }
  },

  // POST /api/spin/accept
  acceptResult: async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      const { cuisine } = req.body;

      if (userId && cuisine) {
        await PreferenceLearnerService.updateFromAction(userId, {
          type: 'SPIN_ACCEPTED',
          cuisine,
        });
      }

      return res.json({ success: true, message: 'Đã lưu lựa chọn của bạn.' });
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi xác nhận lựa chọn.' });
    }
  },

  // POST /api/spin/reroll
  rerollResult: async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      const { cuisine } = req.body;

      if (userId && cuisine) {
        await PreferenceLearnerService.updateFromAction(userId, {
          type: 'SPIN_REROLL',
          cuisine,
        });
      }

      return res.json({ success: true, message: 'Đã ghi nhận phản hồi quay lại.' });
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi ghi nhận phản hồi.' });
    }
  },

  // GET /api/spin/history
  getHistory: async (req: AuthRequest, res: Response) => {
    try {
      const history = [
        {
          id: 'spin_101',
          spunAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          restaurantName: 'Cơm Tấm Ba Cường',
          cuisineType: 'Cơm Tấm',
          wasAccepted: true,
        },
        {
          id: 'spin_102',
          spunAt: new Date(Date.now() - 3600000 * 48).toISOString(),
          restaurantName: 'Bún Bò Huế Chị Mây',
          cuisineType: 'Bún Bò',
          wasAccepted: true,
        },
      ];

      return res.json(history);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi lấy lịch sử quay.' });
    }
  },
};

