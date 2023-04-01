import Home from '../home/index';

const express = require('express');

const router = express.Router();

router.get('/about', (req, res) => {
  res.send('About app');
});

router.use('/home', Home);

export default router;
