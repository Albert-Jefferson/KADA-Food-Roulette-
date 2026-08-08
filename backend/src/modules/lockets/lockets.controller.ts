import { Request, Response } from 'express';
import { AuthRequest } from '../../shared/middleware/auth.middleware';

export const locketsController = {
  // GET /api/lockets/feed
  getFeed: async (req: Request, res: Response) => {
    try {
      const locketsFeed = [
        {
          id: 'locket-1',
          userPublicName: 'Tuấn Anh',
          userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
          restaurantName: 'Cơm Tấm Ba Cường',
          imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
          caption: 'Sườn bì chả ngon xuất sắc trưa nay! 🔥',
          rating: 5,
          timestamp: new Date().toISOString(),
          lat: 10.762622,
          lng: 106.682200,
          verifiedCamera: true,
        },
        {
          id: 'locket-2',
          userPublicName: 'Hoàng Hiếu',
          userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150',
          restaurantName: 'Phở Thìn Hà Nội',
          imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800',
          caption: 'Nước dùng ngậy thơm, phở tái lăn chuẩn vị 🍲',
          rating: 4.8,
          timestamp: new Date(Date.now() - 3600000 * 3).toISOString(),
          lat: 10.778000,
          lng: 106.691000,
          verifiedCamera: true,
        },
      ];

      return res.json(locketsFeed);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi lấy bảng tin Locket Feed.' });
    }
  },

  // POST /api/lockets - Camera only upload
  create: async (req: AuthRequest, res: Response) => {
    try {
      const { restaurantId, caption, rating, lat, lng, imageUrl } = req.body;

      const newLocket = {
        id: `locket_${Date.now()}`,
        userId: req.user?.id,
        restaurantId,
        imageUrl: imageUrl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
        caption,
        rating: rating || 5,
        lat,
        lng,
        verifiedCamera: true,
        createdAt: new Date().toISOString(),
      };

      return res.status(201).json(newLocket);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi tạo bài đăng Locket.' });
    }
  },
};
