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
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const mongodb_1 = require("mongodb");
class FileDTO {
    constructor(fieldname, originalname, encoding, mimetype, buffer, size) {
        this._fieldname = fieldname;
        this._originalname = originalname;
        this._encoding = encoding;
        this._mimetype = mimetype;
        this._buffer = buffer;
        this._size = size;
    }
    get id() {
        return this._id;
    }
    get fieldname() {
        return this._fieldname;
    }
    set fieldname(value) {
        this._fieldname = value;
    }
    get originalname() {
        return this._originalname;
    }
    set originalname(value) {
        this._originalname = value;
    }
    get encoding() {
        return this._encoding;
    }
    set encoding(value) {
        this._encoding = value;
    }
    get mimetype() {
        return this._mimetype;
    }
    set mimetype(value) {
        this._mimetype = value;
    }
    get buffer() {
        return this._buffer;
    }
    set buffer(value) {
        this._buffer = value;
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(param => param.value ? param.value.toHexString() : null, { toPlainOnly: true }),
    __metadata("design:type", mongodb_1.ObjectId)
], FileDTO.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'fieldname' }),
    __metadata("design:type", String)
], FileDTO.prototype, "_fieldname", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'originalname' }),
    __metadata("design:type", String)
], FileDTO.prototype, "_originalname", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'encoding' }),
    __metadata("design:type", String)
], FileDTO.prototype, "_encoding", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'mimetype' }),
    __metadata("design:type", String)
], FileDTO.prototype, "_mimetype", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'buffer' }),
    __metadata("design:type", String)
], FileDTO.prototype, "_buffer", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'size' }),
    __metadata("design:type", Number)
], FileDTO.prototype, "_size", void 0);
exports.default = FileDTO;
//# sourceMappingURL=FileDTO.js.map