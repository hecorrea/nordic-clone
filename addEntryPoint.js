const path = require('path');
const fs = require('fs');
const glob = require('glob');

const checkIfHasSlash = (path) => {
  const shashRegex = /^\//;
  if (!shashRegex.test(path)) {
    return `/${path}`;
  }
  return path;
} 

class AddEntryPlugin {
  constructor(folderPath) {
    this.folderPath = folderPath;
  }

  apply(compiler) {
    compiler.hooks.entryOption.tap('AddEntryPlugin', (context, entry) => {
      const files = glob.sync(path.join(this.folderPath, '**/*.{js,ts,jsx}'));

      files.forEach((fileName) => {
        const relativePath = path.relative(this.folderPath, fileName);
        const routeRelativePath = `/${path.dirname(relativePath)}`;
    
        const uiComponentsRegex = /ui-components\//;
        const canCreateRouteGroup = !uiComponentsRegex.test(fileName);
    
        if (canCreateRouteGroup) {
          const indexRegex = /index\.(js|jsx|ts|tsx)$/;
          const isIndexFile = indexRegex.test(fileName);
          
          const fileNameWithoutExtension = relativePath.replace(/\.[^/.]+$/, '');
         
          const routePath = checkIfHasSlash(isIndexFile 
            ? routeRelativePath 
            : fileNameWithoutExtension);

          const nordicPageName = `app_nordic-pages_${routePath.replace(/\//g, '_')}`;
          entry[nordicPageName] = { import: [`./.nordic-pages/${nordicPageName}.hydrate.js`]};

          const removeLastSlash = fileName.replace(/\/[^/]*$/, '');
          const fileSCSSName = `./${removeLastSlash}/styles.scss`;

          if (fs.existsSync(fileSCSSName)) {
            entry[`${nordicPageName}_css`] = { import: [fileSCSSName]};
          }

        }
      });
      
    });
  }
}

module.exports = AddEntryPlugin;