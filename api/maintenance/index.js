// This file exports functions for managing maintenance requests, including listing and creating requests.

const express = require('express');
const router = express.Router();

// Mock data for maintenance requests
let maintenanceRequests = [];

// Get all maintenance requests
router.get('/', (req, res) => {
    res.json(maintenanceRequests);
});

// Create a new maintenance request
router.post('/', (req, res) => {
    const newRequest = {
        id: maintenanceRequests.length + 1,
        description: req.body.description,
        status: 'pending',
        createdAt: new Date(),
    };
    maintenanceRequests.push(newRequest);
    res.status(201).json(newRequest);
});

module.exports = router;