const express = require('express');
const router = express.Router();

// Mock data for roles
let roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
    { id: 3, name: 'Guest' }
];

// Get all roles
router.get('/', (req, res) => {
    res.json(roles);
});

// Get a role by ID
router.get('/:id', (req, res) => {
    const role = roles.find(r => r.id === parseInt(req.params.id));
    if (!role) return res.status(404).send('Role not found');
    res.json(role);
});

// Create a new role
router.post('/', (req, res) => {
    const newRole = {
        id: roles.length + 1,
        name: req.body.name
    };
    roles.push(newRole);
    res.status(201).json(newRole);
});

// Update a role
router.put('/:id', (req, res) => {
    const role = roles.find(r => r.id === parseInt(req.params.id));
    if (!role) return res.status(404).send('Role not found');

    role.name = req.body.name;
    res.json(role);
});

// Delete a role
router.delete('/:id', (req, res) => {
    const roleIndex = roles.findIndex(r => r.id === parseInt(req.params.id));
    if (roleIndex === -1) return res.status(404).send('Role not found');

    roles.splice(roleIndex, 1);
    res.status(204).send();
});

module.exports = router;