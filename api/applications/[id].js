import { getApplicationById, updateApplicationById, deleteApplicationById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const application = await getApplicationById(id);
                if (!application) {
                    return res.status(404).json({ message: 'Application not found' });
                }
                return res.status(200).json(application);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving application', error });
            }

        case 'PUT':
            try {
                const updatedApplication = await updateApplicationById(id, req.body);
                return res.status(200).json(updatedApplication);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating application', error });
            }

        case 'DELETE':
            try {
                await deleteApplicationById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting application', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}