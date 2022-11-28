import express from 'express';
import { 
    getStudents, 
    getStudentById, 
    createStudent, 
    updateStudent, 
    deleteStudent ,
    assignSubject
} from '../controllers/StudentController.js';

const router = express.Router();

// Students
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.post('/create', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

router.post('/:id/assign', assignSubject);

export default router;