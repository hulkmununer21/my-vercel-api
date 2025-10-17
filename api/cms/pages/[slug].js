import { getPageBySlug } from '../../../src/_shared/db'; // Adjust the import based on your actual database access method

export default async function handler(req, res) {
    const { slug } = req.query;

    if (req.method === 'GET') {
        try {
            const page = await getPageBySlug(slug);
            if (!page) {
                return res.status(404).json({ message: 'Page not found' });
            }
            return res.status(200).json(page);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }

    return res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}