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
const CareerService_1 = __importDefault(require("../../../service/CareerService"));
const Logger_1 = __importDefault(require("../../../utils/Logger"));
const AsyncHandler_1 = __importDefault(require("../../../utils/AsyncHandler"));
let IndexController = class IndexController {
    constructor(careerService) {
        Logger_1.default.debug("Initialising Index Controller");
        this._router = express_1.default.Router();
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Career");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveIndex(req, res)));
        return this._router;
    }
    async serveIndex(req, res) {
        return res.render('index', { title: 'Express' });
    }
};
IndexController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [CareerService_1.default])
], IndexController);
exports.default = IndexController;
//# sourceMappingURL=IndexController.js.map