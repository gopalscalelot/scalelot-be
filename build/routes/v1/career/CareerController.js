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
const express_1 = __importDefault(require("express"));
const ApiResponse_1 = require("../../../utils/ApiResponse");
const ResponseMessages_1 = __importDefault(require("../../../utils/statics/ResponseMessages"));
const Logger_1 = __importDefault(require("../../../utils/Logger"));
const tsyringe_1 = require("tsyringe");
const CareerService_1 = __importDefault(require("../../../service/CareerService"));
const AsyncHandler_1 = __importDefault(require("../../../utils/AsyncHandler"));
const class_transformer_1 = require("class-transformer");
const Career_1 = __importDefault(require("../../../dto/Career"));
const AppUtils_1 = __importDefault(require("../../../utils/AppUtils"));
let CareerController = class CareerController {
    constructor(careerService) {
        Logger_1.default.debug("Initialising Register User Controller");
        this._router = express_1.default.Router();
        this._careerService = careerService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for User Registration");
        this._router.post('/', (0, AsyncHandler_1.default)(async (req, res) => this.createCareerController(req, res)));
        this._router.get('/:user_id', (0, AsyncHandler_1.default)(async (req, res) => this.downloadResume(req, res)));
        return this._router;
    }
    async createCareerController(req, res) {
        Logger_1.default.debug("New Career Create Requested." + JSON.stringify(req.body));
        let career = (0, class_transformer_1.plainToInstance)(Career_1.default, req.body, { excludeExtraneousValues: true });
        career.resumeBase64 = req.file.buffer.toString("base64");
        career = await this._careerService.createCareer(career);
        return new ApiResponse_1.SuccessResponse(ResponseMessages_1.default.CREATE_CAREER_SUCCESS, AppUtils_1.default.nullPropsRemover((0, class_transformer_1.instanceToPlain)(career))).send(res);
    }
    async downloadResume(req, res) {
        Logger_1.default.debug("Downalod file for user: " + req.params.user_id);
        return new ApiResponse_1.SuccessResponse(ResponseMessages_1.default.CREATE_CAREER_SUCCESS, "Hello").send(res);
    }
};
CareerController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [CareerService_1.default])
], CareerController);
exports.default = CareerController;
//# sourceMappingURL=CareerController.js.map