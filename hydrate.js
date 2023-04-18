const path = require('path');
const fs = require('fs');
const glob = require('glob');
const babel = require('@babel/core');

const checkIfHasSlash = (path) => {
  const shashRegex = /^\//;
  if (!shashRegex.test(path)) {
    return `/${path}`;
  }
  return path;
} 

class HydratePlugin {
  constructor(folderPath) {
    this.folderPath = folderPath;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('HydratePlugin', (compilation, callback) => {
      const files = glob.sync(path.join(this.folderPath, '**/*.{js,ts,jsx}'));

      files.forEach((fileName) => {
        const relativePath = path.relative(this.folderPath, fileName);
        const routeRelativePath = `/${path.dirname(relativePath)}`;
    
        const uiComponentsRegex = /ui-components\//;
        const hasUiComponentName = uiComponentsRegex.test(fileName);
        if (hasUiComponentName) return;

        const indexRegex = /index\.(js|jsx|ts|tsx)$/;
        const isIndexFile = indexRegex.test(fileName);
        const fileNameWithoutExtension = relativePath.replace(/\.[^/.]+$/, '');
        
        const pathName = checkIfHasSlash(
          isIndexFile 
            ? routeRelativePath 
            : fileNameWithoutExtension
        );

        const name = `app_nordic-pages_${pathName.replace(/\//g, '_')}`;

        const hydrateRoot = path.join(
          path.dirname(compilation.outputOptions.path),
          '.nordic-pages'
        );
      
        const hydrateFilePath = path.join(hydrateRoot, `${name}.hydrate.js`);
        
        const importFilePath = path.relative(
          path.dirname(hydrateFilePath),
          path.join(__dirname, fileName)
        );

        const componentImport = `import Component from '${importFilePath}';`;
        const fileContent = `
import React from 'react';
import ReactDOM from 'react-dom';
${componentImport}

const props = window.__INITIAL_PROPS__;
ReactDOM.hydrate(
  <Component {...props} />,
  document.querySelector('#root')
);
        `;

        fs.writeFileSync(hydrateFilePath, fileContent, 'utf8');
      });

      callback();
    });
  }
}

module.exports = HydratePlugin;