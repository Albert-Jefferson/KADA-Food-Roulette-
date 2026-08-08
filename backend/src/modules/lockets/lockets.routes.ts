import { Router } from 'express';
import { locketsController } from './lockets.controller';
import { authenticateJWT } from '../../shared/middleware/auth.middleware';

const router = Router();

router.get('/feed', locketsController.getFeed);
router.post('/', authenticateJWT, locketsController.create);

export default router;
