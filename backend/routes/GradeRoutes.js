import express from 'express';
import {
    getGrades,
    getGradeById
} from '../controllers/GradeController.js';

const router = express.Router();

// Grades
router.get('/', getGrades);
router.get('/:id', getGradeById);

export default router;