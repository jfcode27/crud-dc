import express from 'express';
import { getSubjects, getSubjectById, getSubjectBySlug } from "../controllers/SubjectController.js";

const router = express.Router();

router.get('/', getSubjects);
// router.get('/:id', getSubjectById);
router.get('/:slug', getSubjectBySlug);


export default router;