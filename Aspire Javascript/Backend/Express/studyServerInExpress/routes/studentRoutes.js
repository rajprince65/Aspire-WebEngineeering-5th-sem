import express from 'express';
import {listStudents,addStudents, updateStudents,deleteStudents} from '../controllers/studentControllers.js';
const router = express.Router();

router.get('/list',listStudents)
router.post('/add',addStudents)
router.put('/update',updateStudents)
router.delete('/delete',deleteStudents)


export default router;