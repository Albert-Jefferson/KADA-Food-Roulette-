import { Request, Response } from 'express';
import { AuthRequest } from '../../shared/middleware/auth.middleware';

export const groupsController = {
  // POST /api/groups
  createGroup: async (req: AuthRequest, res: Response) => {
    try {
      const { name, maxMembers } = req.body;
      const groupCode = Math.random().toString(36).substring(2, 8).toUpperCase();

      const newGroup = {
        id: `grp_${Date.now()}`,
        name: name || 'Nhóm Ăn Trưa Cực Vui',
        groupCode,
        maxMembers: maxMembers || 20,
        creatorId: req.user?.id || 'anonymous',
        membersCount: 1,
        createdAt: new Date().toISOString(),
      };

      return res.status(201).json(newGroup);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi tạo nhóm quay.' });
    }
  },

  // GET /api/groups
  listGroups: async (req: AuthRequest, res: Response) => {
    try {
      const groups = [
        {
          id: 'grp_001',
          name: 'Hội Sâu Code Q3',
          groupCode: 'FOOD88',
          membersCount: 5,
          maxMembers: 20,
          lastSpinResult: 'Cơm Tấm Ba Cường',
          role: 'ADMIN',
        },
        {
          id: 'grp_002',
          name: 'Ăn Trưa Công Ty',
          groupCode: 'LUNCH55',
          membersCount: 8,
          maxMembers: 20,
          lastSpinResult: 'Phở Thìn Hà Nội',
          role: 'MEMBER',
        },
      ];

      return res.json(groups);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi lấy danh sách nhóm.' });
    }
  },

  // GET /api/groups/:id
  getGroup: async (req: AuthRequest, res: Response) => {
    try {
      const { id } = req.params;
      const groupDetails = {
        id,
        name: 'Hội Sâu Code Q3',
        groupCode: 'FOOD88',
        members: [
          { id: 'u1', name: 'Tuấn Anh (PM)', avatar: 'https://i.pravatar.cc/150?img=11', isHost: true },
          { id: 'u2', name: 'Hoàng Hiếu (Frontend)', avatar: 'https://i.pravatar.cc/150?img=12', isHost: false },
          { id: 'u3', name: 'Gia Bình (Content)', avatar: 'https://i.pravatar.cc/150?img=13', isHost: false },
          { id: 'u4', name: 'Lê Huy Trường (Backend)', avatar: 'https://i.pravatar.cc/150?img=14', isHost: false },
          { id: 'u5', name: 'Thành Nam (DevOps)', avatar: 'https://i.pravatar.cc/150?img=15', isHost: false },
        ],
        status: 'IDLE', // IDLE | SPINNING | VOTING | COMPLETED
      };

      return res.json(groupDetails);
    } catch (error: any) {
      return res.status(500).json({ error: 'Không tìm thấy nhóm.' });
    }
  },

  // POST /api/groups/:id/spin
  startSpin: async (req: AuthRequest, res: Response) => {
    try {
      const { id } = req.params;
      const { candidateRestaurants } = req.body;

      const result = {
        sessionId: `group_spin_${Date.now()}`,
        groupId: id,
        selectedRestaurant: {
          id: 'rest-1',
          name: 'Cơm Tấm Ba Cường',
          address: '123 Nguyễn Trãi, Q1, TP.HCM',
          rating: 4.8,
        },
        spunBy: req.user?.id,
        status: 'VOTING',
        voteTimeoutSeconds: 60,
      };

      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi bắt đầu Group Spin.' });
    }
  },

  // POST /api/groups/:id/vote
  vote: async (req: AuthRequest, res: Response) => {
    try {
      const { decision } = req.body; // 'ACCEPT' | 'VETO'

      return res.json({
        message: decision === 'VETO' ? 'Bạn đã Veto kết quả!' : 'Bạn đã chấp nhận kết quả!',
        votedAt: new Date().toISOString(),
      });
    } catch (error: any) {
      return res.status(500).json({ error: 'Lỗi gửi vote.' });
    }
  },
};
