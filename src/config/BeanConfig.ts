import CareerController from "../routes/v1/career/CareerController";
import {container, singleton} from "tsyringe";
import LoginController from "../routes/v1/login/LoginController";

@singleton()
export default class BeanConfig {
    //Controllers
    private readonly _careerController: CareerController;
    private readonly _loginController: LoginController;


    constructor() {
        this._careerController = container.resolve(CareerController);
        this._loginController = container.resolve(LoginController);
    }

    get careerController(): CareerController {
        return this._careerController;
    }

    get loginController(): LoginController {
        return this._loginController;
    }
}
