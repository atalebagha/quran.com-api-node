import { Router } from 'express';

import surahs from './surahs';

const router = Router();

router.use('/surahs', surahs);

export default router;
