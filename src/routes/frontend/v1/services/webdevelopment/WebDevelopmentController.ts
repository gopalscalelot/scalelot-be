import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../../utils/Logger";
import AsyncHandler from "../../../../../utils/AsyncHandler";

@autoInjectable()
export default class WebDevelopmentController {
    private _router: Router;

    constructor() {
        Logger.debug("Initialising Service WebDevelopment FrontEnd Routes");
        this._router = express.Router();
    }

    routes() {
        Logger.debug("Configuring routes for Services Web Development");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveWebDev(req, res)));
        this._router.get('/angular-development', AsyncHandler(async (req:any, res:any) => this.serveAngularDev(req, res)));
        this._router.get('/reactjs-development', AsyncHandler(async (req:any, res:any) => this.serveReactDev(req, res)));
        this._router.get('/nodejs-development', AsyncHandler(async (req:any, res:any) => this.serveNodeDev(req, res)));
        this._router.get('/python-development', AsyncHandler(async (req:any, res:any) => this.servePythonDev(req, res)));
        this._router.get('/html5-development', AsyncHandler(async (req:any, res:any) => this.serveHtml5Dev(req, res)));
        this._router.get('/wordpress-development', AsyncHandler(async (req:any, res:any) => this.serveWordpressDev(req, res)));
        this._router.get('/magento-development', AsyncHandler(async (req:any, res:any) => this.serveMagentoDev(req, res)));
        this._router.get('/woocommerce-development', AsyncHandler(async (req:any, res:any) => this.serveWooComDev(req, res)));
        this._router.get('/shopify-development', AsyncHandler(async (req:any, res:any) => this.serveShopifyDev(req, res)));
        this._router.get('/cms-website-development', AsyncHandler(async (req:any, res:any) => this.serveCMSDev(req, res)));
        this._router.get('/mongodb-database-design', AsyncHandler(async (req:any, res:any) => this.serveMongoDBDesign(req, res)));
        this._router.get('/mysql-database-design', AsyncHandler(async (req:any, res:any) => this.serveMySqlDesign(req, res)));
        return this._router;
    }

    private async serveWebDev(req: any, res: any) {
        return res.render('services/web-development', { title: 'Express' });
    }

    private async serveAngularDev(req: any, res: any) {
        return res.render('services/web-development/angular-development', { title: 'Express' });
    }

    private async serveReactDev(req: any, res: any) {
        return res.render('services/web-development/react-development', { title: 'Express' });
    }

    private async serveNodeDev(req: any, res: any) {
        return res.render('services/web-development/node-development', { title: 'Express' });
    }

    private async servePythonDev(req: any, res: any) {
        return res.render('services/web-development/python-development', { title: 'Express' });
    }

    private async serveHtml5Dev(req: any, res: any) {
        return res.render('services/web-development/html5-development', { title: 'Express' });
    }

    private async serveWordpressDev(req: any, res: any) {
        return res.render('services/web-development/wordpress-development', { title: 'Express' });
    }

    private async serveMagentoDev(req: any, res: any) {
        return res.render('services/web-development/magento-development', { title: 'Express' });
    }

    private async serveWooComDev(req: any, res: any) {
        return res.render('services/web-development/woo-commerce-development', { title: 'Express' });
    }

    private async serveShopifyDev(req: any, res: any) {
        return res.render('services/web-development/shopify-development', { title: 'Express' });
    }

    private async serveCMSDev(req: any, res: any) {
        return res.render('services/web-development/cms-development', { title: 'Express' });
    }

    private async serveMongoDBDesign(req: any, res: any) {
        return res.render('services/web-development/mongodb-design', { title: 'Express' });
    }

    private async serveMySqlDesign(req: any, res: any) {
        return res.render('services/web-development/mysql-database', { title: 'Express' });
    }

}