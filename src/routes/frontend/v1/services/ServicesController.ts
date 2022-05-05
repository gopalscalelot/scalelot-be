import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../utils/Logger";
import AsyncHandler from "../../../../utils/AsyncHandler";

@autoInjectable()
export default class ServicesController {
    private _router: Router;

    constructor() {
        Logger.debug("Initialising Service FrontEnd Routes");
        this._router = express.Router();
    }

    routes() {
        Logger.debug("Configuring routes for Services");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveServices(req, res)));
        return this._router;
    }

    private async serveServices(req: any, res: any) {
        return res.render('services', { title: 'Express' });
    }

}