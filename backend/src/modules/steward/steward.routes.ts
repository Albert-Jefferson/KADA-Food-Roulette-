import { Router } from 'express';
import { stewardController } from './steward.controller';
import { authenticateJWT } from '../../shared/middleware/auth.middleware';

const router = Router();

router.get('/pending-restaurants', authenticateJWT, stewardController.getPending);
router.post('/approve-restaurant/:id', authenticateJWT, stewardController.approve);

export default router;
