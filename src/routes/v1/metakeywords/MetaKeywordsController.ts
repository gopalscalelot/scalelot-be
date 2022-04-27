import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../utils/Logger";
import AsyncHandler from "../../../utils/AsyncHandler";
import {SuccessResponse} from "../../../utils/ApiResponse";
import ResponseMessages from "../../../utils/statics/ResponseMessages";
import MetaKeywordsService from "../../../service/MetaKeywordsService";
import {ProtectedRequest} from "../../../utils/app-request";

@autoInjectable()
export default class MetaKeywordsController {
    private _router: Router;
    private _metaKeywordsService: MetaKeywordsService;


    constructor(metaKeywordsService: MetaKeywordsService) {
        this._router = express.Router();
        this._metaKeywordsService = metaKeywordsService;
    }

    routes() {
        Logger.debug("Configuring Meta Keywords Router");
        this._router.post('/', AsyncHandler(async (req: ProtectedRequest, res) => this.addMetaKeywords(req, res)));
        return this._router;
    }

    private async addMetaKeywords(req: ProtectedRequest, res: any) {
        Logger.debug("Add Meta Keywords requested");

        return new SuccessResponse(ResponseMessages.CREATE_CAREER_SUCCESS, {}).send(res);
    }
}