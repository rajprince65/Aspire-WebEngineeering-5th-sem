
import express from 'express';
import { teacherlistControllers } from '../controllers/teacherlistConrollers.js';
import teacherMiddleware from '../middleware/teacherMiddleware.js';
const router = express.Router();

router.use(teacherMiddleware);

router.get('/info', teacherlistControllers);

export default router;