import express from 'express';
import {
    getGrades,
    getGradeById,
    updateGrade
} from '../controllers/GradeController.js';

const router = express.Router();

// Grades
router.get('/', getGrades);
router.get('/:id', getGradeById);
router.put('/:id', updateGrade);

export default router;