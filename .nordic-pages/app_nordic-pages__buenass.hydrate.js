
import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../app/nordic-pages/buenass.js';

const props = window.__INITIAL_PROPS__;
ReactDOM.hydrate(
  <Component {...props} />,
  document.querySelector('#root')
);
        