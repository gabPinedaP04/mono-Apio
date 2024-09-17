import { Router } from 'express';
import { createCase, getAllCases, getRecentCases, updateCase, deleteCase } from '../controllers/case.controller';

const router = Router();


router.post('/cases', createCase);
router.get('/cases', getAllCases);
router.get('/cases/recent', getRecentCases);
router.put('/cases/:id', updateCase);
router.delete('/cases/:id', deleteCase);

export default router;