const express = require('express');
const path = require('path');

const routesRootDirectory = path.resolve(__dirname, '..', 'app', 'nordic-pages');

const checkIfHasSlash = (path) => {
  const shashRegex = /^\//;
  if (!shashRegex.test(path)) {
    return `/${path}`;
  }
  return path;
} 

const renderPage = (routeModule, { fileName }) => (req, res) => {
  res.render(routeModule.default);
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
     
      const routePath = isIndexFile 
        ? routeRelativePath 
        : fileNameWithoutExtension;

      const routeModule = files(fileName);

      return router.get(
        checkIfHasSlash(routePath),
        renderPage(routeModule, { fileName }));
    }
  });
  return router;
}

const routesRouter = createRoutesFromDirectory(routesRootDirectory);

// Mount the top-level router to the app
export default routesRouter;
