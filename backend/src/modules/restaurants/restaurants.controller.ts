import { Request, Response } from 'express';
import { prisma } from '../../shared/utils/prisma';
import { AuthRequest } from '../../shared/middleware/auth.middleware';

export const restaurantsController = {
  // GET /api/restaurants - Nearby and filter list
  getNearby: async (req: Request, res: Response) => {
    try {
      const { lat, lng, radiusKm, price, cuisine, search } = req.query;

      // Mock sample restaurant dataset if DB is empty or during development
      const sampleRestaurants = [
        {
          id: 'rest-1',
          name: 'Cơm Tấm Ba Cường',
          address: '123 Nguyễn Trãi, Quận 1, TP.HCM',
          lat: 10.762622,
          lng: 106.682200,
          rating: 4.8,
          reviewCount: 342,
          priceLevel: '$$',
          cuisineType: 'Cơm Tấm',
          tasteNote: 'Đậm đà, béo ngậy',
          isSpicy: false,
          isVegetarian: false,
          photoUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
          distanceKm: 0.8,
        },
        {
          id: 'rest-2',
          name: 'Phở Thìn Hà Nội - Chi nhánh Q3',
          address: '45 Võ Văn Tần, Quận 3, TP.HCM',
          lat: 10.778000,
          lng: 106.691000,
          rating: 4.7,
          reviewCount: 520,
          priceLevel: '$$$',
          cuisineType: 'Phở',
          tasteNote: 'Thanh ngọt, thơm nức',
          isSpicy: false,
          isVegetarian: false,
          photoUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=600',
          distanceKm: 1.2,
        },
        {
          id: 'rest-3',
          name: 'Bún Bò Huế Chị Mây',
          address: '88 Nguyễn Đình Chiểu, Quận 3, TP.HCM',
          lat: 10.785000,
          lng: 106.695000,
          rating: 4.9,
          reviewCount: 210,
          priceLevel: '$$',
          cuisineType: 'Bún Bò',
          tasteNote: 'Cay nồng, đậm đà',
          isSpicy: true,
          isVegetarian: false,
          photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600',
          distanceKm: 2.1,
        },
        {
          id: 'rest-4',
          name: 'Bánh Mì Huỳnh Hoa',
          address: '26 Lê Thị Riêng, Quận 1, TP.HCM',
          lat: 10.771000,
          lng: 106.692000,
          rating: 4.6,
          reviewCount: 1450,
          priceLevel: '$$',
          cuisineType: 'Bánh Mì',
          tasteNote: 'Giòn rụm, đẫm nhân',
          isSpicy: true,
          isVegetarian: false,
          photoUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=600',
          distanceKm: 1.5,
        },
        {
          id: 'rest-5',
          name: 'Quán Chay Bồ Đề Tâm',
          address: '15 Trần Hưng Đạo, Quận 1, TP.HCM',
          lat: 10.768000,
          lng: 106.690000,
          rating: 4.8,
          reviewCount: 180,
          priceLevel: '$',
          cuisineType: 'Món Chay',
          tasteNote: 'Thanh tịnh, tươi ngon',
          isSpicy: false,
          isVegetarian: true,
          photoUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
          distanceKm: 1.0,
        },
      ];

      return res.json(sampleRestaurants);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi máy chủ khi lấy danh sách quán ăn.' });
    }
  },

  // GET /api/restaurants/:id
  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const restaurant = {
        id,
        name: 'Cơm Tấm Ba Cường',
        address: '123 Nguyễn Trãi, Quận 1, TP.HCM',
        phone: '0901234567',
        rating: 4.8,
        reviewCount: 342,
        priceLevel: '$$',
        cuisineType: 'Cơm Tấm',
        openingHours: '06:00 - 22:00',
        photoUrls: [
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600'
        ],
        popularDishes: ['Cơm tấm sườn bì chả', 'Cơm tấm sườn nướng mật ong', 'Canh khổ qua dồn thịt'],
      };

      return res.json(restaurant);
    } catch (error: any) {
      return res.status(500).json({ error: 'Không tìm thấy quán ăn.' });
    }
  },

  // POST /api/restaurants - User-submitted restaurant
  create: async (req: AuthRequest, res: Response) => {
    try {
      const { name, address, cuisineType, priceLevel } = req.body;

      if (!name || !address) {
        return res.status(400).json({ error: 'Tên quán và địa chỉ không được để trống.' });
      }

      const newRestaurant = {
        id: `user_rest_${Date.now()}`,
        name,
        address,
        cuisineType: cuisineType || 'Khác',
        priceLevel: priceLevel || '$$',
        approvalStatus: 'PENDING',
        submittedBy: req.user?.id || 'anonymous',
        createdAt: new Date().toISOString(),
      };

      return res.status(201).json({
        message: 'Đề xuất quán ăn thành công! Quán đang chờ Steward kiểm duyệt.',
        restaurant: newRestaurant,
      });
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi gửi đề xuất quán ăn.' });
    }
  },
};
