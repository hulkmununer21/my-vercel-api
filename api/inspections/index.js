import { Router } from 'express';
import { getInspections, createInspection } from '../../src/_shared/inspections';

const router = Router();

// GET /api/inspections - Retrieve a list of inspections
router.get('/', async (req, res) => {
    try {
        const inspections = await getInspections();
        res.status(200).json(inspections);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving inspections', error });
    }
});

// POST /api/inspections - Create a new inspection
router.post('/', async (req, res) => {
    try {
        const newInspection = await createInspection(req.body);
        res.status(201).json(newInspection);
    } catch (error) {
        res.status(500).json({ message: 'Error creating inspection', error });
    }
});

export default router;