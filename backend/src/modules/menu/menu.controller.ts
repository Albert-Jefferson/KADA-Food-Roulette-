import { Response } from 'express';
import { AuthRequest } from '../../shared/middleware/auth.middleware';
import { menuService } from './menu.service';

export const menuController = {
  async capture(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.id || 'demo_user_123';
      const restaurantId = (req.body?.restaurantId || req.query?.restaurantId as string) || 'rest-1';
      const filePath = req.file?.path || 'uploads/menus/highlands_menu.jpg';

      console.log(`[menuController.capture] Processing menu for restaurant: ${restaurantId}, user: ${userId}, file: ${filePath}`);
      const result = await menuService.captureMenu(restaurantId, filePath, userId);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(500).json({ message: 'Lỗi khi xử lý menu', error: error.message });
    }
  },

  async verify(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: 'Không có quyền truy cập' });
      }

      const menuId = req.params.menuId as string;
      const { items } = req.body;

      if (!items || !Array.isArray(items)) {
        return res.status(400).json({ message: 'Danh sách món ăn không hợp lệ' });
      }

      const result = await menuService.verifyMenu(menuId, items, userId);
      return res.status(200).json(result);
    } catch (error: any) {
      if (error.message === 'Không tìm thấy menu') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Bạn không có quyền xác nhận menu này') {
        return res.status(403).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Lỗi khi xác nhận menu', error: error.message });
    }
  },

  async getById(req: AuthRequest, res: Response) {
    try {
      const menuId = req.params.menuId as string;
      const result = await menuService.getMenuById(menuId);
      return res.status(200).json(result);
    } catch (error: any) {
      if (error.message === 'Không tìm thấy menu') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Lỗi khi lấy thông tin menu', error: error.message });
    }
  },

  async getByRestaurant(req: AuthRequest, res: Response) {
    try {
      const restaurantId = req.params.restaurantId as string;
      const result = await menuService.getMenusByRestaurant(restaurantId);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({ message: 'Lỗi khi lấy danh sách menu', error: error.message });
    }
  }
};
