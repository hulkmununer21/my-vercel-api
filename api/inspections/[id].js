import { getInspectionById, updateInspectionById, deleteInspectionById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const inspection = await getInspectionById(id);
                if (!inspection) {
                    return res.status(404).json({ message: 'Inspection not found' });
                }
                return res.status(200).json(inspection);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving inspection', error });
            }

        case 'PUT':
            try {
                const updatedInspection = await updateInspectionById(id, req.body);
                return res.status(200).json(updatedInspection);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating inspection', error });
            }

        case 'DELETE':
            try {
                await deleteInspectionById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting inspection', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}