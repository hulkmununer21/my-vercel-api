const roles = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
};

const permissions = {
    [roles.ADMIN]: ['create', 'read', 'update', 'delete'],
    [roles.USER]: ['read', 'update'],
    [roles.GUEST]: ['read'],
};

const hasPermission = (role, action) => {
    return permissions[role] && permissions[role].includes(action);
};

const canAccess = (role, resource, action) => {
    // Define resource-based access control logic here
    // For example, you can check if the role has permission to access a specific resource
    return hasPermission(role, action);
};

export { roles, permissions, hasPermission, canAccess };