// This file exports functions for managing invoices, including listing and creating invoices.

import { getInvoices, createInvoice } from '../../src/_shared/invoiceService';

export const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const invoices = await getInvoices();
                res.status(200).json(invoices);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch invoices' });
            }
            break;
        case 'POST':
            try {
                const newInvoice = await createInvoice(req.body);
                res.status(201).json(newInvoice);
            } catch (error) {
                res.status(400).json({ error: 'Failed to create invoice' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};