import { getUserProfile, updateUserProfile } from '../../src/_shared/auth';

export const handler = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const profile = await getUserProfile(req.user.id);
                return res.status(200).json(profile);
            } catch (error) {
                return res.status(500).json({ error: 'Failed to fetch user profile' });
            }

        case 'PUT':
            try {
                const updatedProfile = await updateUserProfile(req.user.id, req.body);
                return res.status(200).json(updatedProfile);
            } catch (error) {
                return res.status(500).json({ error: 'Failed to update user profile' });
            }

        default:
            return res.status(405).json({ error: 'Method not allowed' });
    }
};