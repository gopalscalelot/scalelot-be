import {autoInjectable} from "tsyringe";
import Login from "../dto/Login";
import LoginRepository from "../repository/LoginRepository";
import bcrypt from "bcrypt";
import JWTUtil from "../utils/JWTUtil";
import {BadRequestError} from "../error/ApiError";

@autoInjectable()
export default class LoginService {

    private _loginRepository: LoginRepository;

    constructor(loginRepository: LoginRepository) {
        this._loginRepository = loginRepository;
    }

    async loginUser(login: Login): Promise<string> {
        let loginFromDB: Login = await this._loginRepository.getLogin(login);
        let bcryptComparisonSuccess: boolean = await bcrypt.compare(login.password, loginFromDB.password);
        if(bcryptComparisonSuccess) {
            return JWTUtil.generateJWTSessionToken({userName: login.userName});
        }
        throw new BadRequestError();
    }
}