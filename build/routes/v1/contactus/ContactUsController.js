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
const express_1 = __importDefault(require("express"));
const Logger_1 = __importDefault(require("../../../utils/Logger"));
const AsyncHandler_1 = __importDefault(require("../../../utils/AsyncHandler"));
const ApiResponse_1 = require("../../../utils/ApiResponse");
const ResponseMessages_1 = __importDefault(require("../../../utils/statics/ResponseMessages"));
const ContactUsService_1 = __importDefault(require("../../../service/ContactUsService"));
const ContactUs_1 = __importDefault(require("../../../dto/ContactUs"));
const class_transformer_1 = require("class-transformer");
let ContactUsController = class ContactUsController {
    constructor(contactUsService) {
        this._router = express_1.default.Router();
        this._contactUsService = contactUsService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Contact Us");
        this._router.post('/', (0, AsyncHandler_1.default)(async (req, res) => this.addContactUsQuery(req, res)));
        return this._router;
    }
    async addContactUsQuery(req, res) {
        Logger_1.default.debug("New Contact US requested");
        let contactUs = (0, class_transformer_1.plainToInstance)(ContactUs_1.default, req.body, { excludeExtraneousValues: true });
        contactUs = await this._contactUsService.addContactUsQuery(contactUs);
        return new ApiResponse_1.SuccessResponse(ResponseMessages_1.default.CREATE_CAREER_SUCCESS, contactUs).send(res);
    }
};
ContactUsController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [ContactUsService_1.default])
], ContactUsController);
exports.default = ContactUsController;
//# sourceMappingURL=ContactUsController.js.map