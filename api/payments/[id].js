import { getPaymentById, updatePaymentById, deletePaymentById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                const payment = await getPaymentById(id);
                if (!payment) {
                    return res.status(404).json({ message: 'Payment not found' });
                }
                return res.status(200).json(payment);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving payment', error });
            }
        
        case 'PUT':
            try {
                const updatedPayment = await updatePaymentById(id, req.body);
                return res.status(200).json(updatedPayment);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating payment', error });
            }

        case 'DELETE':
            try {
                await deletePaymentById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting payment', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}