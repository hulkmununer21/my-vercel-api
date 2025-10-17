import { getCampaignById, updateCampaignById, deleteCampaignById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                const campaign = await getCampaignById(id);
                if (!campaign) {
                    return res.status(404).json({ message: 'Campaign not found' });
                }
                return res.status(200).json(campaign);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving campaign', error });
            }
        
        case 'PUT':
            try {
                const updatedCampaign = await updateCampaignById(id, req.body);
                return res.status(200).json(updatedCampaign);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating campaign', error });
            }

        case 'DELETE':
            try {
                await deleteCampaignById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting campaign', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}