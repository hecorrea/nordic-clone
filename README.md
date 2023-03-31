### Comandos disponibles en este package.json
El archivo package.json es un archivo de configuración para proyectos de Node.js que contiene información sobre el proyecto y sus dependencias. En este archivo se definen varios scripts para ejecutar diferentes tareas. A continuación, se detallan los comandos disponibles en este archivo:

- npm test: Ejecuta los tests del proyecto. Actualmente este comando muestra un mensaje de error y termina la ejecución.
- npm start: Inicia la aplicación en modo de producción, usando el archivo ./public/server.js como punto de entrada.
- npm run build: Compila los archivos del proyecto en modo de desarrollo usando Webpack.
- npm run dist: Compila los archivos del proyecto en modo de producción usando Webpack.
- npm run start-dev: Compila los archivos del proyecto en modo de desarrollo y luego inicia la aplicación.

Para instalar todas las dependencias y dev-dependencias, ejecute el siguiente comando en la terminal en el directorio raíz del proyecto:

### Installation & execution 
```bash
npm install
npm run start-dev
```
