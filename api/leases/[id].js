import { getLeaseById, updateLeaseById, deleteLeaseById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const lease = await getLeaseById(id);
                if (!lease) {
                    return res.status(404).json({ message: 'Lease not found' });
                }
                return res.status(200).json(lease);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving lease', error });
            }

        case 'PUT':
            try {
                const updatedLease = await updateLeaseById(id, req.body);
                return res.status(200).json(updatedLease);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating lease', error });
            }

        case 'DELETE':
            try {
                await deleteLeaseById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting lease', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}