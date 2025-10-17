import { Router } from 'express';
import { getVendors, createVendor } from '../../src/_shared/vendorService';

const router = Router();

// GET /api/vendors - Retrieve a list of vendors
router.get('/', async (req, res) => {
    try {
        const vendors = await getVendors();
        res.status(200).json(vendors);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving vendors', error });
    }
});

// POST /api/vendors - Create a new vendor
router.post('/', async (req, res) => {
    try {
        const newVendor = await createVendor(req.body);
        res.status(201).json(newVendor);
    } catch (error) {
        res.status(500).json({ message: 'Error creating vendor', error });
    }
});

export default router;