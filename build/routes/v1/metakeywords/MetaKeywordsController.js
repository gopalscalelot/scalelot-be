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
const MetaKeywordsService_1 = __importDefault(require("../../../service/MetaKeywordsService"));
let MetaKeywordsController = class MetaKeywordsController {
    constructor(metaKeywordsService) {
        this._router = express_1.default.Router();
        this._metaKeywordsService = metaKeywordsService;
    }
    routes() {
        Logger_1.default.debug("Configuring Meta Keywords Router");
        this._router.post('/', (0, AsyncHandler_1.default)(async (req, res) => this.addMetaKeywords(req, res)));
        return this._router;
    }
    async addMetaKeywords(req, res) {
        Logger_1.default.debug("Add Meta Keywords requested");
        return new ApiResponse_1.SuccessResponse(ResponseMessages_1.default.CREATE_CAREER_SUCCESS, {}).send(res);
    }
};
MetaKeywordsController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [MetaKeywordsService_1.default])
], MetaKeywordsController);
exports.default = MetaKeywordsController;
//# sourceMappingURL=MetaKeywordsController.js.map