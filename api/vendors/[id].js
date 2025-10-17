import { getVendorById, updateVendorById, deleteVendorById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                const vendor = await getVendorById(id);
                if (!vendor) {
                    return res.status(404).json({ message: 'Vendor not found' });
                }
                return res.status(200).json(vendor);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving vendor', error });
            }
        
        case 'PUT':
            try {
                const updatedVendor = await updateVendorById(id, req.body);
                return res.status(200).json(updatedVendor);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating vendor', error });
            }

        case 'DELETE':
            try {
                await deleteVendorById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting vendor', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}