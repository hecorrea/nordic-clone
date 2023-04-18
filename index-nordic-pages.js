const express = require('express');
const fs = require('fs');
const path = require('path');

const routesRootDirectory = path.resolve(__dirname, '..', 'app', 'nordic-pages');

const renderPage = (routeModule, { fileNameJS, fileNameCSS }) => async (req, res) => {
  const props = routeModule?.getServerSideProps ? (
    await routeModule.getServerSideProps(req, res)
  ) : {};
  
  res.render(routeModule.default, props, {
    bundle: {
      js: fileNameJS,
      styles: fileNameCSS ? fileNameCSS : undefined,
    }
  } );
}

const checkIfHasSlash = (path) => {
  const shashRegex = /^\//;
  if (!shashRegex.test(path)) {
    return `/${path}`;
  }
  return path;
} 

function createRoutesFromDirectory(directoryPath) {
  const router = express.Router();
  const files = require.context('/app/nordic-pages', true, /\.js$/);

  files.keys().forEach((fileName) => {
    const filePath = files.resolve(fileName);
    const relativePath = path.relative(directoryPath, filePath);
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

      const routeModule = files(fileName);

      const nordicPageName = `app_nordic-pages_${routePath.replace(/\//g, '_')}`;

      const removeLastSlash = filePath.replace(/\/[^/]*$/, '');
      const fileSCSSName = `${removeLastSlash}/styles.scss`;

      const filesRoutes = { fileNameJS: `${nordicPageName}.bundle.js` };
      if (fs.existsSync(fileSCSSName)) {
        filesRoutes['fileNameCSS'] = `${nordicPageName}_css.bundle.css`;
      }

      return router.get(
        routePath,
        renderPage(routeModule, filesRoutes)
      );
    }
  });
  return router;
}

const routesRouter = createRoutesFromDirectory(routesRootDirectory);

// Mount the top-level router to the app
export default routesRouter;
