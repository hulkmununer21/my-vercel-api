import { Router } from 'express';

const router = Router();

// Mock data for campaigns
let campaigns = [];

// Get all campaigns
router.get('/', (req, res) => {
    res.status(200).json(campaigns);
});

// Create a new campaign
router.post('/', (req, res) => {
    const newCampaign = {
        id: campaigns.length + 1,
        ...req.body
    };
    campaigns.push(newCampaign);
    res.status(201).json(newCampaign);
});

export default router;