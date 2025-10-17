// This file contains utility functions used throughout the project.

export const isEmpty = (value) => {
    return value === null || value === undefined || value === '';
};

export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
};

export const parseJson = (jsonString) => {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return null;
    }
};