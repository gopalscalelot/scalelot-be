import {autoInjectable} from "tsyringe";
import ContactUsRepository from "../repository/ContactUsRepository";
import ContactUs from "../dto/ContactUs";
import EmailService from "./EmailService";
import {instanceToPlain} from "class-transformer";

@autoInjectable()
export default class ContactUsService {

    private _contactUsRepository: ContactUsRepository;
    private _emailService: EmailService;

    constructor(contactUsRepository: ContactUsRepository, emailService: EmailService) {
        this._contactUsRepository = contactUsRepository;
        this._emailService = emailService;
    }

    public async addContactUsQuery(contactUs: ContactUs): Promise<ContactUs> {

        let contactUsFromDB: ContactUs = await this._contactUsRepository.saveContactUs(contactUs);

        await this._emailService.sendEmail("hr@scalelot.com", "Someone tried to contact us", JSON.stringify(contactUsFromDB));

        return contactUsFromDB;
    }

    public async getAllContactUsQuery(): Promise<ContactUs[]> {
        return this._contactUsRepository.getAllContactUsQuery();
    }
}