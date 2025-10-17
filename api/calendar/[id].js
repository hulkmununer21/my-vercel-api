import { getCalendarEventById, updateCalendarEventById, deleteCalendarEventById } from '../../src/_shared/db';

export default async function handler(req, res) {
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            try {
                const event = await getCalendarEventById(id);
                if (!event) {
                    return res.status(404).json({ message: 'Event not found' });
                }
                return res.status(200).json(event);
            } catch (error) {
                return res.status(500).json({ message: 'Error retrieving event', error });
            }

        case 'PUT':
            try {
                const updatedEvent = await updateCalendarEventById(id, req.body);
                return res.status(200).json(updatedEvent);
            } catch (error) {
                return res.status(500).json({ message: 'Error updating event', error });
            }

        case 'DELETE':
            try {
                await deleteCalendarEventById(id);
                return res.status(204).end();
            } catch (error) {
                return res.status(500).json({ message: 'Error deleting event', error });
            }

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}