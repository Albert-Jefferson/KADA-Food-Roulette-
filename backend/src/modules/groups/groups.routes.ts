import { Router } from 'express';
import { groupsController } from './groups.controller';
import { authenticateJWT } from '../../shared/middleware/auth.middleware';

const router = Router();

router.post('/', authenticateJWT, groupsController.createGroup);
router.get('/', authenticateJWT, groupsController.listGroups);
router.get('/:id', authenticateJWT, groupsController.getGroup);
router.post('/:id/spin', authenticateJWT, groupsController.startSpin);
router.post('/:id/vote', authenticateJWT, groupsController.vote);

export default router;
