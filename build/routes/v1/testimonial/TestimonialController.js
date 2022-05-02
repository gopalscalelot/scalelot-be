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
const TestimonialService_1 = __importDefault(require("../../../service/TestimonialService"));
const class_transformer_1 = require("class-transformer");
const ApiResponse_1 = require("../../../utils/ApiResponse");
const ResponseMessages_1 = __importDefault(require("../../../utils/statics/ResponseMessages"));
const AppUtils_1 = __importDefault(require("../../../utils/AppUtils"));
const Testimonial_1 = __importDefault(require("../../../dto/Testimonial"));
let TestimonialController = class TestimonialController {
    constructor(testimonialService) {
        this._router = express_1.default.Router();
        this._testimonialService = testimonialService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Client testimonial");
        this._router.post('/', (0, AsyncHandler_1.default)(async (req, res) => this.addTestimonial(req, res)));
        return this._router;
    }
    async addTestimonial(req, res) {
        Logger_1.default.debug("Creating new Client testimonial");
        let testimonial = (0, class_transformer_1.plainToInstance)(Testimonial_1.default, req.body, { excludeExtraneousValues: true });
        testimonial = await this._testimonialService.addTestimonial(testimonial);
        return new ApiResponse_1.SuccessResponse(ResponseMessages_1.default.CREATE_CAREER_SUCCESS, AppUtils_1.default.nullPropsRemover((0, class_transformer_1.instanceToPlain)(testimonial))).send(res);
    }
};
TestimonialController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [TestimonialService_1.default])
], TestimonialController);
exports.default = TestimonialController;
//# sourceMappingURL=TestimonialController.js.map