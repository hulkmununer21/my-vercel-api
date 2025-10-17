import { getUnitById, updateUnitById, deleteUnitById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const unit = await getUnitById(id);
                if (!unit) {
                    return res.status(404).json({ message: 'Unit not found' });
                }
                return res.status(200).json(unit);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving unit', error });
            }

        case 'PUT':
            try {
                const updatedUnit = await updateUnitById(id, req.body);
                return res.status(200).json(updatedUnit);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating unit', error });
            }

        case 'DELETE':
            try {
                await deleteUnitById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting unit', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}