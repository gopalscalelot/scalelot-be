"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ContactUsRepository_1 = __importDefault(require("../repository/ContactUsRepository"));
const EmailService_1 = __importDefault(require("./EmailService"));
const Logger_1 = __importDefault(require("../utils/Logger"));
const FileService_1 = __importDefault(require("./FileService"));
let ContactUsService = class ContactUsService {
    constructor(contactUsRepository, emailService, fileService) {
        this._contactUsRepository = contactUsRepository;
        this._emailService = emailService;
        this._fileService = fileService;
    }
    async addContactUsQuery(contactUs, files) {
        const savedFiles = await this._fileService.saveFiles(files);
        Logger_1.default.debug(savedFiles.map(savedFile => savedFile.id));
        contactUs.files = savedFiles.map(savedFile => savedFile.id);
        let contactUsFromDB = await this._contactUsRepository.saveContactUs(contactUs);
        await this._emailService.sendEmail("hr@scalelot.com", "Someone tried to contact us", JSON.stringify(contactUsFromDB));
        await this._emailService.sendEmail(contactUs.email, "Thank you for contacting us.", JSON.stringify(contactUsFromDB));
        return contactUsFromDB;
    }
    async getAllContactUsQuery() {
        return this._contactUsRepository.getAllContactUsQuery();
    }
};
ContactUsService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [ContactUsRepository_1.default, EmailService_1.default, FileService_1.default])
], ContactUsService);
exports.default = ContactUsService;
//# sourceMappingURL=ContactUsService.js.map