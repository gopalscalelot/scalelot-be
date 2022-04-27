import CareerController from "../routes/v1/career/CareerController";
import {container, singleton} from "tsyringe";
import LoginController from "../routes/v1/login/LoginController";
import ContactUsController from "../routes/v1/contactus/ContactUsController";

@singleton()
export default class BeanConfig {
    //Controllers
    private readonly _careerController: CareerController;
    private readonly _loginController: LoginController;
    private readonly _contactUsController: ContactUsController;

    constructor() {
        this._careerController = container.resolve(CareerController);
        this._loginController = container.resolve(LoginController);
        this._contactUsController = container.resolve(ContactUsController);
    }

    get careerController(): CareerController {
        return this._careerController;
    }

    get loginController(): LoginController {
        return this._loginController;
    }

    get contactUsController(): ContactUsController {
        return this._contactUsController;
    }
}
