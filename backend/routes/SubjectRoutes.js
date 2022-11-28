import express from 'express';
import { 
    getSubjects, 
    getSubjectById, 
    getSubjectBySlug,
    getSubjectGrades,
    createSubject,
    deleteSubject
} from "../controllers/SubjectController.js";

const router = express.Router();

router.get('/',  getSubjects);
router.get('/:id', getSubjectById);
// router.get('/:slug', getSubjectBySlug);
router.get('/:id/grades', getSubjectGrades);

router.post('/create', createSubject);
router.delete('/:id', deleteSubject);

export default router;