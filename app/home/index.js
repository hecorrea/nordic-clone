import express from 'express';
import { getHomeData, render } from './controller';

const router = express.Router();

router.use('/', getHomeData, render);

export default router;
