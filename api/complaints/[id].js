import { getComplaintById, updateComplaintById, deleteComplaintById } from '../../_shared/db';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                const complaint = await getComplaintById(id);
                if (!complaint) {
                    return res.status(404).json({ message: 'Complaint not found' });
                }
                return res.status(200).json(complaint);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving complaint', error });
            }
        
        case 'PUT':
            try {
                const updatedComplaint = await updateComplaintById(id, req.body);
                return res.status(200).json(updatedComplaint);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating complaint', error });
            }

        case 'DELETE':
            try {
                await deleteComplaintById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting complaint', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}