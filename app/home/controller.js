import React from 'react';
import Home from '../home/view/index';

export const getHomeData = (req, res, next) => {
  res.locals = {
    name: 'Hernan Correa',
    email: 'hernan.correa@mercadolibre.com.co',
    site: 'MLA',
  }
  next();
}

export const render = (req, res, next) => {
  const { name, email, site } = res.locals;

  const renderProps = {
    name,
    email,
    site,
  }

  const View = (props) => (
    <Home {...props} />
  );

  res.render(
    View, 
    renderProps,
    {
      layout: {
        title: 'Welcome'
      }
    }
  );
}