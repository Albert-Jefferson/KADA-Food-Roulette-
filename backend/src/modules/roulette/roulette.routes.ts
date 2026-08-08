import { Router } from 'express';
import { rouletteController } from './roulette.controller';
import { authenticateJWT } from '../../shared/middleware/auth.middleware';

const router = Router();

router.post('/personal', authenticateJWT, rouletteController.spinPersonal);
router.post('/accept', authenticateJWT, rouletteController.acceptResult);
router.post('/reroll', authenticateJWT, rouletteController.rerollResult);
router.get('/history', authenticateJWT, rouletteController.getHistory);

export default router;
