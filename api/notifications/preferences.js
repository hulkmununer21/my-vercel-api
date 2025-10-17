// This file handles user notification preferences.
// It exports functions to get and update user notification settings.

const express = require('express');
const router = express.Router();

// Mock database for user preferences
let userPreferences = {};

// Get user notification preferences
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const preferences = userPreferences[userId] || {};
    res.json(preferences);
});

// Update user notification preferences
router.put('/:userId', (req, res) => {
    const userId = req.params.userId;
    const preferences = req.body;

    userPreferences[userId] = preferences;
    res.status(200).json({ message: 'Preferences updated successfully' });
});

module.exports = router;