import express from 'express';
import { getSubjects, getSubjectById, getSubjectBySlug } from "../controllers/SubjectController.js";
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute, getSubjects);
router.get('/:id', protectRoute, getSubjectById);
// router.get('/:slug', getSubjectBySlug);


export default router;