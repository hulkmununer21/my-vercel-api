const express = require('express');
const router = express.Router();

// PayPal webhook endpoint
router.post('/paypal', (req, res) => {
    const event = req.body;

    // Handle the event based on its type
    switch (event.event_type) {
        case 'PAYMENT.SALE.COMPLETED':
            // Handle successful payment
            break;
        case 'PAYMENT.SALE.DENIED':
            // Handle denied payment
            break;
        // Add more cases as needed for different event types
        default:
            console.log(`Unhandled event type: ${event.event_type}`);
    }

    // Respond to PayPal to acknowledge receipt of the event
    res.status(200).send('Event received');
});

module.exports = router;