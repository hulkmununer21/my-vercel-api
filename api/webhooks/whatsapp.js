const express = require('express');
const router = express.Router();

// Handle incoming WhatsApp webhook events
router.post('/', (req, res) => {
    const { body } = req;

    // Process the incoming message or event
    console.log('Received WhatsApp webhook event:', body);

    // Respond with a success status
    res.status(200).send('Webhook received');
});

module.exports = router;