import { Router } from 'express';
import { getLeases, createLease } from '../../src/_shared/leases';

const router = Router();

// GET /api/leases - Retrieve all leases
router.get('/', async (req, res) => {
    try {
        const leases = await getLeases();
        res.status(200).json(leases);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving leases', error });
    }
});

// POST /api/leases - Create a new lease
router.post('/', async (req, res) => {
    try {
        const leaseData = req.body;
        const newLease = await createLease(leaseData);
        res.status(201).json(newLease);
    } catch (error) {
        res.status(500).json({ message: 'Error creating lease', error });
    }
});

export default router;