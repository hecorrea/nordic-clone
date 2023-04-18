import express from 'express';
import apiRouter from './api';
import appRouter from './app/server';
import nordicPagesRouter from './index-nordic-pages';
import { errorMidleware, sharedReferences } from './midlewares';

const app = express();

const port = 3003;

app.use('/', express.static('public'));

app.use('/api', apiRouter);

app.use(sharedReferences);

app.use('/', nordicPagesRouter);

app.use('/', appRouter);

app.use(errorMidleware);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
