import express, {Router} from "express";
import {SuccessResponse} from "../../../utils/ApiResponse";
import ResponseMessages from "../../../utils/statics/ResponseMessages";
import Logger from "../../../utils/Logger";
import {autoInjectable} from "tsyringe";
import AsyncHandler from '../../../utils/AsyncHandler';
import {plainToInstance} from "class-transformer";
import Login from "../../../dto/Login";
import LoginService from "../../../service/LoginService";
import {OperationTypeEnum} from "../../../utils/enum/OperationTypeEnum";

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
        this._router.post('/', AsyncHandler(async (req: any, res: any) => this.loginUser(req, res)));
        return this._router;
    }

    private async loginUser(req: any, res: any) {
        Logger.debug("Login requested." + JSON.stringify(req.body));

        let login: Login = plainToInstance(Login, req.body, {excludeExtraneousValues: true});

        let token: string = await this._loginService.loginUser(login);
        return new SuccessResponse(ResponseMessages.LOGIN_SUCCESS, OperationTypeEnum.LOGIN_SUCCESS, {token: token}).send(res);
    }


}
