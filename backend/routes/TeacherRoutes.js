import express from 'express';
import { getTeachers } from '../controllers/TeacherController.js';

const router = express.Router();

router.get('/', getTeachers);

export default router;