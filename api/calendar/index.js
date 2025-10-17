// This file exports functions for managing calendar events, including listing and creating events.

const express = require('express');
const router = express.Router();

// Mock data for calendar events
let events = [];

// Get all calendar events
router.get('/', (req, res) => {
    res.json(events);
});

// Create a new calendar event
router.post('/', (req, res) => {
    const { title, date, description } = req.body;
    const newEvent = { id: events.length + 1, title, date, description };
    events.push(newEvent);
    res.status(201).json(newEvent);
});

module.exports = router;