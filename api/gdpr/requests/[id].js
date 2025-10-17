import { getRequestById, updateRequestById, deleteRequestById } from '../../../src/_shared/db';

export default async function handler(req, res) {
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case 'GET':
            try {
                const request = await getRequestById(id);
                if (!request) {
                    return res.status(404).json({ message: 'Request not found' });
                }
                return res.status(200).json(request);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving request', error });
            }

        case 'PUT':
            try {
                const updatedRequest = await updateRequestById(id, req.body);
                return res.status(200).json(updatedRequest);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating request', error });
            }

        case 'DELETE':
            try {
                await deleteRequestById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting request', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}