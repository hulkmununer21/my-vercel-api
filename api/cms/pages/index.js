import { getPages, createPage } from '../../../src/_shared/db';

export const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const pages = await getPages();
                res.status(200).json(pages);
            } catch (error) {
                res.status(500).json({ message: 'Error fetching pages', error });
            }
            break;
        case 'POST':
            try {
                const newPage = await createPage(req.body);
                res.status(201).json(newPage);
            } catch (error) {
                res.status(500).json({ message: 'Error creating page', error });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};