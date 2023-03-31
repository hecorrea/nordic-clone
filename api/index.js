import express from 'express';

const router = express.Router();

router.get('/user', (req, res) => {
  res.json({
    name: 'Hernan Correa',
    email: 'hernan.correa@mercadolibre.com.co',
    site: 'MLA',
  });
});

export default router;