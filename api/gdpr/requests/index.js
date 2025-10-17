const express = require('express');
const router = express.Router();

// Mock data for GDPR requests
let gdprRequests = [];

// Get all GDPR requests
router.get('/', (req, res) => {
    res.json(gdprRequests);
});

// Create a new GDPR request
router.post('/', (req, res) => {
    const newRequest = {
        id: gdprRequests.length + 1,
        ...req.body
    };
    gdprRequests.push(newRequest);
    res.status(201).json(newRequest);
});

module.exports = router;