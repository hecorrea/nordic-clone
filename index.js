import express from 'express';
const app = express();
import apiRouter from './api';
import appRouter from './app/server';
import { sharedReferences } from './midlewares';

const port = 3003;

app.use('/api', apiRouter);

app.use(sharedReferences);

app.use('/', appRouter);

app.use('/static', express.static('public'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
