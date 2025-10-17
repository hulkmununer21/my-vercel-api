import { getConversationById } from '../../../src/_shared/db'; // Adjust the import based on your actual database logic

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                const conversation = await getConversationById(id);
                if (!conversation) {
                    return res.status(404).json({ message: 'Conversation not found' });
                }
                return res.status(200).json(conversation);
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error', error });
            }
        // Add other methods (PUT, DELETE) if needed
        default:
            res.setHeader('Allow', ['GET']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}