import { Router } from 'express';

const router = Router();

// Mock data for units
let units = [];

// Get all units
router.get('/', (req, res) => {
    res.status(200).json(units);
});

// Create a new unit
router.post('/', (req, res) => {
    const newUnit = {
        id: units.length + 1,
        ...req.body
    };
    units.push(newUnit);
    res.status(201).json(newUnit);
});

export default router;