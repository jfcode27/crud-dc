import express from 'express';
import { getStudents, getStudentById } from '../controllers/UserController.js';

const router = express.Router();

// Students
router.get('/', getStudents);
router.get('/:id', getStudentById);

export default router;