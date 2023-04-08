import React from 'react';
import { renderToString } from 'react-dom/server';

export const render = (req, res, next) => (Component, props, options = {}) => {
  const html = renderToString(React.createElement(Component, props));
  
  const title = options?.layout?.title || 'Nordic Clone';
 
  const renderedHtml = `
    <html>
      <head>
        <title>${title}</title>
        <link rel="icon" href="/static/img/logo.png"> 
      </head>
      <body>
      <div id="root">${html}</div>
      </body>
    </html>
  `;

  res.send(renderedHtml);
};