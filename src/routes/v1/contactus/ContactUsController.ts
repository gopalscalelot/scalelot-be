import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../utils/Logger";
import AsyncHandler from "../../../utils/AsyncHandler";
import {SuccessResponse} from "../../../utils/ApiResponse";
import ResponseMessages from "../../../utils/statics/ResponseMessages";
import ContactUsService from "../../../service/ContactUsService";
import ContactUs from "../../../dto/ContactUs";
import {plainToInstance} from "class-transformer";
import {ProtectedRequest} from "../../../utils/app-request";
import FileDTO from "../../../dto/FileDTO";
import {OperationTypeEnum} from "../../../utils/enum/OperationTypeEnum";

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
        this._router.get('/all', AsyncHandler(async (req: ProtectedRequest, res: any) => this.getAllContactUsQuery(req, res)));
        return this._router;
    }

    private async addContactUsQuery(req: any, res: any) {
        Logger.debug("New Contact US requested: " + req.body);

        let files: FileDTO[] = [];
        let contactUs: ContactUs = plainToInstance(ContactUs, req.body, {excludeExtraneousValues: true});

        if(req.files && req.files.length != 0) {
            files = req.files.map((file: any) => {
                Logger.debug(file);
                let fileDTO: FileDTO = plainToInstance(FileDTO, file, {excludeExtraneousValues: true});
                fileDTO.buffer = file.buffer.toString("base64");
                return fileDTO;
            });
        }

        contactUs = await this._contactUsService.addContactUsQuery(contactUs, files);

        return new SuccessResponse(ResponseMessages.ADD_CONTACT_US_SUCCESS, OperationTypeEnum.ADD_CONTACT_US_QUERY, contactUs).send(res);
    }

    private async getAllContactUsQuery(req: ProtectedRequest, res: any) {
        Logger.debug("Fetching all contact us query");

        let contactUsList: ContactUs[] = await this._contactUsService.getAllContactUsQuery();

        return new SuccessResponse(ResponseMessages.FETCH_ALL_CONTACT_US_SUCCESS, OperationTypeEnum.GET_ALL_CONTACT_US, contactUsList).send(res);
    }
}