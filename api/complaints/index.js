const express = require('express');
const router = express.Router();

// Mock data for complaints
let complaints = [];

// Get all complaints
router.get('/', (req, res) => {
    res.status(200).json(complaints);
});

// Create a new complaint
router.post('/', (req, res) => {
    const newComplaint = {
        id: complaints.length + 1,
        ...req.body
    };
    complaints.push(newComplaint);
    res.status(201).json(newComplaint);
});

module.exports = router;