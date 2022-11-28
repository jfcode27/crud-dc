import express from 'express';
import { 
    getSubjects, 
    getSubjectById, 
    getSubjectBySlug,
    getSubjectGrades
} from "../controllers/SubjectController.js";

const router = express.Router();

router.get('/',  getSubjects);
router.get('/:id', getSubjectById);
// router.get('/:slug', getSubjectBySlug);
router.get('/:id/grades', getSubjectGrades);


export default router;