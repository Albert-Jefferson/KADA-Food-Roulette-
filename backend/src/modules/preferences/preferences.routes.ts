import { Router } from 'express';
import { preferencesController } from './preferences.controller';
import { authenticateJWT } from '../../shared/middleware/auth.middleware';

const router = Router();

router.use(authenticateJWT);

router.get('/', preferencesController.getPreference.bind(preferencesController));
router.put('/', preferencesController.updatePreference.bind(preferencesController));
router.post('/reset', preferencesController.resetPreference.bind(preferencesController));

export default router;
