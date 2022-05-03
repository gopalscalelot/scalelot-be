// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

export const db = {
    connectionString: "mongodb+srv://gopal_scalelot:root%40Scalelot@cluster0.xjusu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    user: environment == 'production' ? process.env.PROD_DB_USER : process.env.DB_USER || '',
    password: environment == 'production' ? process.env.PROD_DB_PASSWORD : process.env.DB_PASSWORD || '',
};

export const DEFAULT_USER_CREDS = {
    userName: process.env.DEFAULT_USERNAME || 'admin',
    password: process.env.DEFAULT_PASSWORD || 'admin'
}

export const PROTECTED_ENDPOINTS: string[] = "/v1/meta-keywords,/v1/contact-us/all,/v1/career/all".split(",");

export const GMAIL_CONFIG = {
    service: process.env.GMAIL_SERVICE || "gmail",
    user: process.env.GMAIL_AUTH_USERNAME || "sales.scalelot@gmail.com",
    password: process.env.GMAIL_AUTH_PASSWORD || "SalesScalelot@22",
}

export const corsUrl = process.env.CORS_URL || "*";

export const logDirectory = process.env.LOG_DIR || "/";