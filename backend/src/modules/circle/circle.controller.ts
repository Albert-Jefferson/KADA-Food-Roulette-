import { Response } from 'express';
import { AuthRequest } from '../../shared/middleware/auth.middleware';
import { circleService } from './circle.service';

class CircleController {
  async recommend(req: AuthRequest, res: Response) {
    try {
      const { groupId, menuItems, spinSessionId } = req.body;
      const recommendation = await circleService.generateRecommendation(groupId, menuItems, spinSessionId);
      res.json(recommendation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi khi tạo đề xuất nhóm.' });
    }
  }

  async getById(req: AuthRequest, res: Response) {
    try {
      const id = req.params.id as string;
      const recommendation = await circleService.getRecommendationById(id);
      if (!recommendation) {
        return res.status(404).json({ message: 'Không tìm thấy đề xuất.' });
      }
      res.json(recommendation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi khi lấy đề xuất nhóm.' });
    }
  }
}

export const circleController = new CircleController();
