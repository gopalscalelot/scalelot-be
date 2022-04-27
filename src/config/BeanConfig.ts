import CareerController from "../routes/v1/career/CareerController";
import {container, singleton} from "tsyringe";
import LoginController from "../routes/v1/login/LoginController";
import ContactUsController from "../routes/v1/contactus/ContactUsController";
import MetaKeywordsController from "../routes/v1/metakeywords/MetaKeywordsController";

@singleton()
export default class BeanConfig {
    //Controllers
    private readonly _careerController: CareerController;
    private readonly _loginController: LoginController;
    private readonly _contactUsController: ContactUsController;
    private readonly _metaKeywordsController: MetaKeywordsController;

    constructor() {
        this._careerController = container.resolve(CareerController);
        this._loginController = container.resolve(LoginController);
        this._contactUsController = container.resolve(ContactUsController);
        this._metaKeywordsController = container.resolve(MetaKeywordsController);
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

    get metaKeywordsController(): MetaKeywordsController {
        return this._metaKeywordsController;
    }
}
