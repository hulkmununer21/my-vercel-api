import { getPropertyById, updatePropertyById, deletePropertyById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const property = await getPropertyById(id);
                if (!property) {
                    return res.status(404).json({ message: 'Property not found' });
                }
                return res.status(200).json(property);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving property', error });
            }

        case 'PUT':
            try {
                const updatedProperty = await updatePropertyById(id, req.body);
                return res.status(200).json(updatedProperty);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating property', error });
            }

        case 'DELETE':
            try {
                await deletePropertyById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting property', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}