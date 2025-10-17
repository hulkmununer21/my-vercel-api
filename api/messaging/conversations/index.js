import express from 'express';

const router = express.Router();

// Mock data for conversations
let conversations = [];

// Get all conversations
router.get('/', (req, res) => {
    res.json(conversations);
});

// Create a new conversation
router.post('/', (req, res) => {
    const newConversation = {
        id: conversations.length + 1,
        ...req.body
    };
    conversations.push(newConversation);
    res.status(201).json(newConversation);
});

export default router;