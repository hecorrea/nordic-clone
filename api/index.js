import express from 'express';

const router = express.Router();

router.get('/about', (req, res) => {
  res.send('About api');
});

export default router;