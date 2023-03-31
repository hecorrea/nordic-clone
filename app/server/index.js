import React from 'react';
import Home from '../home/index';

console.log('Server is running');

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/about', (req, res) => {
  res.send('About app');
});

router.get('/home', (req, res) => {
  const View = (props) => (
    <Home {...props} />
  );
  res.render(
    View, 
    { name: 'Pepito' },
  );
});

export default router;
