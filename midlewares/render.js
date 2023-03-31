import React from 'react';
import { renderToString } from 'react-dom/server';

export const render = (req, res, next) => (Component, props) => {
  const html = renderToString(<Component {...props} />);
  const serializedProps = JSON.stringify(props).replace(/</g, '\\u003c');

  const renderedHtml = `
    <html>
      <head>
        <title>My App</title>
        <link rel="icon" href="/static/img/logo.jpg"> 
        <link rel="stylesheet" href="/static/home.bundle.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_PROPS__ = ${serializedProps};
        </script>
        <script src="/static/home.bundle.js"></script>
      </body>
    </html>
  `;

  res.send(renderedHtml);
};