// This file exports functions for managing notifications, including listing and creating notifications.

const notifications = [];

// Get all notifications
const getNotifications = (req, res) => {
    res.status(200).json(notifications);
};

// Create a new notification
const createNotification = (req, res) => {
    const { message, userId } = req.body;
    const newNotification = { id: notifications.length + 1, message, userId, read: false };
    notifications.push(newNotification);
    res.status(201).json(newNotification);
};

module.exports = {
    getNotifications,
    createNotification,
};