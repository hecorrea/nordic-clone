import Home from '../home/index';

console.log('Server is running');

const express = require('express');

const router = express.Router();

router.get('/about', (req, res) => {
  res.send('About app');
});

router.use('/home', Home);

export default router;
