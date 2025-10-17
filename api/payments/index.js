import { Router } from 'express';
import { listPayments, createPayment } from '../../src/_shared/payments';

const router = Router();

// Route to list all payments
router.get('/', async (req, res) => {
    try {
        const payments = await listPayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payments', error });
    }
});

// Route to create a new payment
router.post('/', async (req, res) => {
    try {
        const paymentData = req.body;
        const newPayment = await createPayment(paymentData);
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment', error });
    }
});

export default router;