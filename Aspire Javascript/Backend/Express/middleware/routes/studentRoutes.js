
import express from 'express';
import { studentlistControllers } from '../controllers/listStudentController.js';
import studentMiddleware from '../middleware/studentMiddleware.js';
const router = express.Router();

router.use(studentMiddleware);

router.get('/info', studentlistControllers);


export default router;