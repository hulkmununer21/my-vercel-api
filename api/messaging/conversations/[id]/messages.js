import { getMessagesByConversationId, createMessage } from '../../../_shared/db';

export default async function handler(req, res) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const messages = await getMessagesByConversationId(id);
                res.status(200).json(messages);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch messages' });
            }
            break;

        case 'POST':
            try {
                const messageData = req.body;
                const newMessage = await createMessage(id, messageData);
                res.status(201).json(newMessage);
            } catch (error) {
                res.status(500).json({ error: 'Failed to create message' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}