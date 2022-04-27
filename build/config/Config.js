"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logDirectory = exports.corsUrl = exports.GMAIL_CONFIG = exports.PROTECTED_ENDPOINTS = exports.DEFAULT_USER_CREDS = exports.db = exports.port = exports.environment = void 0;
// Mapper for environment variables
exports.environment = process.env.NODE_ENV;
exports.port = process.env.PORT;
exports.db = {
    connectionString: exports.environment == 'production' ? process.env.PROD_DB_CONNECTION_STRING : process.env.DB_CONNECTION_STRING || '',
    user: exports.environment == 'production' ? process.env.PROD_DB_USER : process.env.DB_USER || '',
    password: exports.environment == 'production' ? process.env.PROD_DB_PASSWORD : process.env.DB_PASSWORD || '',
};
exports.DEFAULT_USER_CREDS = {
    userName: process.env.DEFAULT_USERNAME || '',
    password: process.env.DEFAULT_PASSWORD || ''
};
exports.PROTECTED_ENDPOINTS = process.env.PROTECTED_ENDPOINTS.split(",");
exports.GMAIL_CONFIG = {
    service: process.env.GMAIL_SERVICE || '',
    user: process.env.GMAIL_AUTH_USERNAME || '',
    password: process.env.GMAIL_AUTH_PASSWORD || '',
};
exports.corsUrl = process.env.CORS_URL;
exports.logDirectory = process.env.LOG_DIR;
//# sourceMappingURL=Config.js.map