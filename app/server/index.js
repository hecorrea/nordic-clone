import Home from '../pages/home/index';

const express = require('express');

const router = express.Router();

router.use('/home', Home);

const notFound = (req, res) => {
  res.status(404).send('Not found');
};

router.use(notFound);

export default router;
