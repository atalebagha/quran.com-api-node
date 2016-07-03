import { Router } from 'express';
import models from '../../models';

const router = Router();

router.get('/', (req, res) => {
  models.quran.surah.all().then(surahs => {
    res.send(surahs);
  });
});

router.get('/:id', (req, res) => {
  models.quran.surah.findById(req.params.id).then(surah => {
    res.send(surah);
  });
});

router.get('/:id/ayahs', (req, res) => {
  models.quran.surah.findOne({where: {surah_id: req.params.id}, include: [models.quran.ayah] }).then(surah => {
    res.send(surah.ayahs);
  });
});

export default router;
