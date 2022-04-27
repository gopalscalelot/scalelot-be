import {autoInjectable} from "tsyringe";
import ContactUsRepository from "../repository/ContactUsRepository";
import ContactUs from "../dto/ContactUs";

@autoInjectable()
export default class ContactUsService {

    private _contactUsRepository: ContactUsRepository;

    constructor(contactUsRepository: ContactUsRepository) {
        this._contactUsRepository = contactUsRepository;
    }

    async addContactUsQuery(contactUs: ContactUs) {
        return await this._contactUsRepository.saveContactUs(contactUs);
    }
}