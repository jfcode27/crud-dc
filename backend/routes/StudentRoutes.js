import express from 'express';
import { getStudents, getStudentById, createStudent } from '../controllers/StudentController.js';

const router = express.Router();

// Students
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.post('/create', createStudent);

export default router;