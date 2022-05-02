import {autoInjectable} from "tsyringe";
import ContactUsRepository from "../repository/ContactUsRepository";
import ContactUs from "../dto/ContactUs";
import EmailService from "./EmailService";
import FileDTO from "../dto/FileDTO";
import Logger from "../utils/Logger";
import FileService from "./FileService";

@autoInjectable()
export default class ContactUsService {

    private _contactUsRepository: ContactUsRepository;
    private _emailService: EmailService;
    private _fileService: FileService;

    constructor(contactUsRepository: ContactUsRepository, emailService: EmailService, fileService: FileService) {
        this._contactUsRepository = contactUsRepository;
        this._emailService = emailService;
        this._fileService = fileService;
    }

    public async addContactUsQuery(contactUs: ContactUs, files: FileDTO[]): Promise<ContactUs> {
        const savedFiles: FileDTO[] = await this._fileService.saveFiles(files);
        Logger.debug(savedFiles.map(savedFile => savedFile.id));
        contactUs.files = savedFiles.map(savedFile => savedFile.id);

        let contactUsFromDB: ContactUs = await this._contactUsRepository.saveContactUs(contactUs);

        await this._emailService.sendEmail("hr@scalelot.com", "Someone tried to contact us", JSON.stringify(contactUsFromDB));
        await this._emailService.sendEmail(contactUs.email, "Thank you for contacting us.", JSON.stringify(contactUsFromDB));

        return contactUsFromDB;
    }

    public async getAllContactUsQuery(): Promise<ContactUs[]> {
        return this._contactUsRepository.getAllContactUsQuery();
    }
}