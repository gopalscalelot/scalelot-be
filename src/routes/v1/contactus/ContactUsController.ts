import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../utils/Logger";
import AsyncHandler from "../../../utils/AsyncHandler";
import {SuccessResponse} from "../../../utils/ApiResponse";
import ResponseMessages from "../../../utils/statics/ResponseMessages";
import ContactUsService from "../../../service/ContactUsService";
import ContactUs from "../../../dto/ContactUs";
import {plainToInstance} from "class-transformer";

@autoInjectable()
export default class ContactUsController {
    private _router: Router;
    private _contactUsService: ContactUsService;

    constructor(contactUsService: ContactUsService) {
        this._router = express.Router();
        this._contactUsService = contactUsService;
    }

    routes() {
        Logger.debug("Configuring routes for Contact Us");
        this._router.post('/', AsyncHandler(async (req: any, res: any) => this.addContactUsQuery(req, res)));
        return this._router;
    }

    private async addContactUsQuery(req: any, res: any) {
        Logger.debug("New Contact US requested");

        let contactUs: ContactUs = plainToInstance(ContactUs, req.body, {excludeExtraneousValues: true});

        contactUs = await this._contactUsService.addContactUsQuery(contactUs);

        return new SuccessResponse(ResponseMessages.CREATE_CAREER_SUCCESS, contactUs).send(res);
    }
}