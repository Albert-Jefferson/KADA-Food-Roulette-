import { Router } from 'express';
import { circleController } from './circle.controller';
import { authenticateJWT } from '../../shared/middleware/auth.middleware';

const router = Router();

router.use(authenticateJWT);

router.post('/recommend', circleController.recommend.bind(circleController));
router.get('/recommendation/:id', circleController.getById.bind(circleController));

export default router;
