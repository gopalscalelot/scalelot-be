import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../../utils/Logger";
import AsyncHandler from "../../../../../utils/AsyncHandler";

@autoInjectable()
export default class SalesFunnelDesignController {
    private _router: Router;

    constructor() {
        Logger.debug("Initialising Service Sales Funnel FrontEnd Routes");
        this._router = express.Router();
    }

    routes() {
        Logger.debug("Configuring routes for Services Sales Funnel");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveSalesFunnelDesign(req, res)));
        this._router.get('/unbounce-landing-page-development', AsyncHandler(async (req:any, res:any) => this.serveULPDev(req, res)));
        this._router.get('/click-funnels-development', AsyncHandler(async (req:any, res:any) => this.serveClickFunnel(req, res)));
        this._router.get('/instapage-landing-page-development', AsyncHandler(async (req:any, res:any) => this.serveInstaLandingPageDev(req, res)));
        this._router.get('/hubspot-development', AsyncHandler(async (req:any, res:any) => this.serveHubspotDev(req, res)));
        return this._router;
    }

    private async serveSalesFunnelDesign(req: any, res: any) {
        return res.render('services/sales-funnel', { title: 'Express' });
    }

    private async serveULPDev(req: any, res: any) {
        return res.render('services/sales-funnel/unbounce', { title: 'Express' });
    }

    private async serveClickFunnel(req: any, res: any) {
        return res.render('services/sales-funnel/click-funnels', { title: 'Express' });
    }

    private async serveInstaLandingPageDev(req: any, res: any) {
        return res.render('services/sales-funnel/instapage', { title: 'Express' });
    }

    private async serveHubspotDev(req: any, res: any) {
        return res.render('services/sales-funnel/hubspot', { title: 'Express' });
    }

}