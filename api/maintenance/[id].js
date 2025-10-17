import { getMaintenanceRequestById, updateMaintenanceRequest, deleteMaintenanceRequest } from '../../src/_shared/db';

export default async function handler(req, res) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const maintenanceRequest = await getMaintenanceRequestById(id);
                if (!maintenanceRequest) {
                    return res.status(404).json({ message: 'Maintenance request not found' });
                }
                return res.status(200).json(maintenanceRequest);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving maintenance request', error });
            }

        case 'PUT':
            try {
                const updatedRequest = await updateMaintenanceRequest(id, req.body);
                return res.status(200).json(updatedRequest);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating maintenance request', error });
            }

        case 'DELETE':
            try {
                await deleteMaintenanceRequest(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting maintenance request', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}