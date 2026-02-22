import express from 'express';  
import { studentList,addStudent,updateStudent,deleteStudent} from '../controllers/studentController.js';

const router = express.Router();

router.get('/list',studentList);

router.post('/add', addStudent);

router.put('/update', updateStudent);

router.delete('/delete', deleteStudent);

export default router;