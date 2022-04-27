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
import Login from "../../../dto/Login";
import LoginService from "../../../service/LoginService";

@autoInjectable()
export default class LoginController {
    private _router: Router;
    private _loginService: LoginService;

    constructor(loginService: LoginService) {
        Logger.debug("Initialising Register User Controller");
        this._router = express.Router();
        this._loginService = loginService;
    }

    routes() {
        Logger.debug("Configuring routes for User Registration");
        this._router.post('/', AsyncHandler(async (req:any, res:any) => this.createCareerController(req, res)));
        return this._router;
    }

    private async createCareerController(req: any, res: any) {
        Logger.debug("New Career Create Requested." + JSON.stringify(req.body));

        let login: Login = plainToInstance(Login, req.body, { excludeExtraneousValues: true });

        let token: string = await this._loginService.loginUser(login);
        return new SuccessResponse(ResponseMessages.LOGIN_SUCCESS, {token: token}).send(res);
    }


}
