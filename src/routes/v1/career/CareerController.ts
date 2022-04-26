import express, {Router} from "express";
import {SuccessResponse} from "../../../utils/ApiResponse";
import ResponseMessages from "../../../utils/statics/ResponseMessages";
import Logger from "../../../utils/Logger";
import {autoInjectable} from "tsyringe";
import CareerService from '../../../service/CareerService';
import AsyncHandler from '../../../utils/AsyncHandler';
import { instanceToPlain, plainToInstance } from "class-transformer";
import Career from '../../../dto/Career';
import AppUtils from "../../../utils/AppUtils";

@autoInjectable()
export default class CareerController {
    private _router: Router;
    private _careerService: CareerService;

    constructor(careerService: CareerService) {
        Logger.debug("Initialising Register User Controller");
        this._router = express.Router();
        this._careerService = careerService;
    }


    routes() {
        Logger.debug("Configuring routes for User Registration");
        this._router.post('/', AsyncHandler(async (req:any, res:any) => this.createCareerController(req, res)));
        this._router.get('/:user_id', AsyncHandler(async (req: any, res: any) => this.downloadResume(req, res)))
        return this._router;
    }

    private async createCareerController(req: any, res: any) {
        Logger.debug("New Career Create Requested." + JSON.stringify(req.body));

        let career: Career = plainToInstance(Career, req.body, { excludeExtraneousValues: true });

        career.resumeBase64 = req.file.buffer.toString("base64");

        career = await this._careerService.createCareer(career);
        return new SuccessResponse(ResponseMessages.CREATE_CAREER_SUCCESS, AppUtils.nullPropsRemover(instanceToPlain(career))).send(res);
    }

    private async downloadResume(req: any, res: any) {
        Logger.debug("Downalod file for user: " + req.params.user_id);

        return new SuccessResponse(ResponseMessages.CREATE_CAREER_SUCCESS, "Hello").send(res);
        
    }

}
