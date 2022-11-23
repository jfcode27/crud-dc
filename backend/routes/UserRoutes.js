import express from 'express';
import { getStudents, getStudentById, createStudent } from '../controllers/UserController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

// Students
router.get('/', protectRoute, getStudents);
router.get('/:id', protectRoute, getStudentById);
router.post('/students/create', protectRoute, createStudent);

export default router;