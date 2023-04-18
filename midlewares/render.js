import React from 'react';
import { renderToString } from 'react-dom/server';

export const render = (req, res, next) => (Component, props, options = {}) => {
  const html = renderToString(React.createElement(Component, props));
  
  const serializedProps = JSON.stringify(props).replace(/</g, '\\u003c');

  const title = options?.layout?.title || 'Nordic Clone';
  const icon = options?.layout?.icon || '/img/logo.png';

  const styles = options?.bundle?.styles 
    ? `<link rel="stylesheet" href="/${options.bundle.styles}">`
    : '';
  const js = options?.bundle?.js 
    ? `
      <script> 
        window.__INITIAL_PROPS__ = ${serializedProps};
      </script>
      <script src="/${options.bundle.js}" async defer></script>
      <script src="/vendor.bundle.js" async defer></script>
    `
    : '';
 
  const renderedHtml = `
    <html>
      <head>
        <title>${title}</title>
        <link rel="icon" href="/${icon}"> 
        ${styles}
      </head>
      <body>
        <div id="root">${html}</div>
        ${js}
      </body>
    </html>
  `;

  res.send(renderedHtml);
};