import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home/view/index';

const props = window.__INITIAL_PROPS__;

ReactDOM.hydrate(<Home {...props} />, document.querySelector('#root'));