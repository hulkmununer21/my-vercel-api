// This file manages GDPR consent-related operations. 

const express = require('express');
const router = express.Router();

// Mock database for storing consents
let consents = [];

// Get all consents
router.get('/', (req, res) => {
    res.json(consents);
});

// Create a new consent
router.post('/', (req, res) => {
    const { userId, consentGiven } = req.body;
    const newConsent = { id: consents.length + 1, userId, consentGiven, date: new Date() };
    consents.push(newConsent);
    res.status(201).json(newConsent);
});

// Get a specific consent by ID
router.get('/:id', (req, res) => {
    const consent = consents.find(c => c.id === parseInt(req.params.id));
    if (!consent) return res.status(404).send('Consent not found');
    res.json(consent);
});

// Update a specific consent by ID
router.put('/:id', (req, res) => {
    const consent = consents.find(c => c.id === parseInt(req.params.id));
    if (!consent) return res.status(404).send('Consent not found');

    const { consentGiven } = req.body;
    consent.consentGiven = consentGiven;
    res.json(consent);
});

// Delete a specific consent by ID
router.delete('/:id', (req, res) => {
    const consentIndex = consents.findIndex(c => c.id === parseInt(req.params.id));
    if (consentIndex === -1) return res.status(404).send('Consent not found');

    consents.splice(consentIndex, 1);
    res.status(204).send();
});

module.exports = router;