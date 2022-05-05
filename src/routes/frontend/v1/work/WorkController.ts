import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../utils/Logger";
import AsyncHandler from "../../../../utils/AsyncHandler";

@autoInjectable()
export default class WorkController {
    private _router: Router;

    constructor() {
        Logger.debug("Initialising Work FrontEnd Routes");
        this._router = express.Router();
    }

    routes() {
        Logger.debug("Configuring routes for Work");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveWork(req, res)));
        this._router.get('/portfolio', AsyncHandler(async (req:any, res:any) => this.servePortfolio(req, res)));
        this._router.get('/testimonials', AsyncHandler(async (req:any, res:any) => this.serveTestimonials(req, res)));
        return this._router;
    }

    private async serveWork(req: any, res: any) {
        return res.render('work', { title: 'Express' });
    }

    private async servePortfolio(req: any, res: any) {
        return res.render('work/portfolio', { title: 'Express' });
    }

    private async serveTestimonials(req: any, res: any) {
        return res.render('work/testimonials', { title: 'Express' });
    }

}