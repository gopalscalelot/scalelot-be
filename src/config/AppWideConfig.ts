import express, {Express} from 'express';
import Logger from '../utils/Logger';
import bodyParser from 'body-parser';
import cors from 'cors';
import {corsUrl} from "./Config";
import RouterConfig from '../routes/v1/RouterConfig';
import ErrorHandlerMiddlewares from '../middleware/ErrorHandlerMiddlewares';
import {autoInjectable, container} from "tsyringe";
import multer from 'multer';
import MongoDBConnectionConfig from './MongoDBConnectionConfig';
import AuthMiddleware from "../auth/AuthMiddleware";
@autoInjectable()
export default class AppWideConfig {

    private app: Express;
    private isConfigured: boolean;
    private authMiddleware: AuthMiddleware;
    private routerConfig: RouterConfig;
    private mongoDBConnectionConfig: MongoDBConnectionConfig;

    constructor( routerConfig: RouterConfig, mongoDBConnectionConfig: MongoDBConnectionConfig, authMiddleware: AuthMiddleware) {
        this.app = express();
        this.isConfigured = false;
        this.routerConfig = routerConfig;
        this.mongoDBConnectionConfig = mongoDBConnectionConfig;
        this.authMiddleware = authMiddleware;
    }

    public getConfiguredApp(): express.Express {
        Logger.debug("Returning Configured app");

        process.on('uncaughtException', (e) => {
            Logger.error(e);
        });

        if (this.isConfigured) {
          return this.app;
        }

        this.configureMongoDBConnection();
        this.configureBodyParser();
        this.configureCORS();
        this.attachPreRouterMiddlewares();
        this.configureV1Router();
        this.attachErrorMiddleware();

        this.isConfigured = true;
        return this.app;
    }

    private configureMongoDBConnection() {
        this.mongoDBConnectionConfig.initializeDB();
    }
    
    private configureBodyParser() {
        Logger.debug("Configuring Body Parser");
        this.app.use(bodyParser.json({limit: '1mb'}));
        this.app.use(bodyParser.urlencoded({limit: '1mb', extended: true, parameterLimit: 50000}));
    }

    private configureCORS() {
        Logger.debug("Configuring CORS");
        this.app.use(cors({origin: corsUrl, optionsSuccessStatus: 200}));
    }

    private attachPreRouterMiddlewares() {
        Logger.debug("Configuring Pre Router Middlewares");
        this.app.use(this.authMiddleware.authMiddleware);
    }

    private configureV1Router() {
        Logger.debug("Configuring Router");
        this.app.use('/v1', this.routerConfig.getRouter());
    }

    private attachErrorMiddleware() {
        Logger.debug("Configuring Error Middlewares");
        // catch 404 and forward to error handler
        this.app.use(ErrorHandlerMiddlewares.undefinedRoutesErrorMiddleware);

        // Middleware Error Handler
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.app.use(ErrorHandlerMiddlewares.errorHandlerMiddleware);
    }
}