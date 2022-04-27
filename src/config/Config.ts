// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

export const db = {
    connectionString: environment == 'production' ? process.env.PROD_DB_CONNECTION_STRING : process.env.DB_CONNECTION_STRING || '',
    user: environment == 'production' ? process.env.PROD_DB_USER : process.env.DB_USER || '',
    password: environment == 'production' ? process.env.PROD_DB_PASSWORD : process.env.DB_PASSWORD || '',
};

export const DEFAULT_USER_CREDS = {
    userName: process.env.DEFAULT_USERNAME || '',
    password: process.env.DEFAULT_PASSWORD || ''
}

export const PROTECTED_ENDPOINTS: string[] = process.env.PROTECTED_ENDPOINTS!.split(",");

export const GMAIL_CONFIG = {
    service: process.env.GMAIL_SERVICE || '',
    user: process.env.GMAIL_AUTH_USERNAME || '',
    password: process.env.GMAIL_AUTH_PASSWORD || '',
}

export const corsUrl = process.env.CORS_URL;

export const logDirectory = process.env.LOG_DIR;