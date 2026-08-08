import { Request, Response } from 'express';
import { AuthRequest } from '../../shared/middleware/auth.middleware';

export const stewardController = {
  // GET /api/steward/pending-restaurants
  getPending: async (req: AuthRequest, res: Response) => {
    try {
      const pendingList = [
        {
          id: 'user_rest_01',
          name: 'Quán Ốc Đêm 77',
          address: '450 Nguyễn Thị Minh Khai, Quận 3, TP.HCM',
          cuisineType: 'Quán Ốc',
          priceLevel: '$$',
          submittedBy: 'u_user_99',
          submittedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
          status: 'PENDING',
        },
      ];

      return res.json(pendingList);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi lấy danh sách quán chờ duyệt.' });
    }
  },

  // POST /api/steward/approve-restaurant/:id
  approve: async (req: AuthRequest, res: Response) => {
    try {
      const { id } = req.params;
      const { action } = req.body; // 'APPROVE' | 'REJECT'

      return res.json({
        message: action === 'APPROVE' ? `Đã duyệt quán ${id} thành công!` : `Đã từ chối quán ${id}.`,
        status: action === 'APPROVE' ? 'APPROVED' : 'REJECTED',
      });
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi duyệt quán.' });
    }
  },
};
