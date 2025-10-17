import { getInvoiceById, updateInvoiceById, deleteInvoiceById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                const invoice = await getInvoiceById(id);
                if (!invoice) {
                    return res.status(404).json({ message: 'Invoice not found' });
                }
                return res.status(200).json(invoice);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving invoice', error });
            }
        case 'PUT':
            try {
                const updatedInvoice = await updateInvoiceById(id, req.body);
                return res.status(200).json(updatedInvoice);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating invoice', error });
            }
        case 'DELETE':
            try {
                await deleteInvoiceById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting invoice', error });
            }
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}