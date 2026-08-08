import { Response } from 'express';
import { AuthRequest } from '../../shared/middleware/auth.middleware';
import { preferencesService } from './preferences.service';

class PreferencesController {
  async getPreference(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.id;
      const preference = await preferencesService.getOrCreatePreference(userId);
      res.json(preference);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi khi lấy thông tin sở thích.' });
    }
  }

  async updatePreference(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.id;
      const updated = await preferencesService.updateExplicitPreference(userId, req.body);
      res.json(updated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi khi cập nhật sở thích.' });
    }
  }

  async resetPreference(req: AuthRequest, res: Response) {
    try {
      const userId = req.user!.id;
      const reset = await preferencesService.resetPreference(userId);
      res.json(reset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi khi đặt lại sở thích.' });
    }
  }
}

export const preferencesController = new PreferencesController();
