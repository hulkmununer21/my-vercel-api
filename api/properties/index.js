import { Router } from 'express';
import { listProperties, createProperty } from './propertyController';

const router = Router();

// Route to list all properties
router.get('/', listProperties);

// Route to create a new property
router.post('/', createProperty);

export default router;