import { body, param, query } from 'express-validator';

// Validation for user profile
export const validateUserProfile = () => {
    return [
        body('name').isString().notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('age').optional().isInt({ min: 0 }).withMessage('Age must be a positive integer'),
    ];
};

// Validation for property ID
export const validatePropertyId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid property ID'),
    ];
};

// Validation for unit ID
export const validateUnitId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid unit ID'),
    ];
};

// Validation for application ID
export const validateApplicationId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid application ID'),
    ];
};

// Validation for lease ID
export const validateLeaseId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid lease ID'),
    ];
};

// Validation for invoice ID
export const validateInvoiceId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid invoice ID'),
    ];
};

// Validation for payment ID
export const validatePaymentId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid payment ID'),
    ];
};

// Validation for complaint ID
export const validateComplaintId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid complaint ID'),
    ];
};

// Validation for inspection ID
export const validateInspectionId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid inspection ID'),
    ];
};

// Validation for maintenance ID
export const validateMaintenanceId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid maintenance ID'),
    ];
};

// Validation for vendor ID
export const validateVendorId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid vendor ID'),
    ];
};

// Validation for conversation ID
export const validateConversationId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid conversation ID'),
    ];
};

// Validation for calendar event ID
export const validateCalendarEventId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid calendar event ID'),
    ];
};

// Validation for CMS page slug
export const validateCmsPageSlug = () => {
    return [
        param('slug').isString().notEmpty().withMessage('Slug is required'),
    ];
};

// Validation for campaign ID
export const validateCampaignId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid campaign ID'),
    ];
};

// Validation for GDPR request ID
export const validateGdprRequestId = () => {
    return [
        param('id').isMongoId().withMessage('Invalid GDPR request ID'),
    ];
};