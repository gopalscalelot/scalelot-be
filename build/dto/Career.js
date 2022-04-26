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
class Career {
    constructor(_id, _firstName, _lastName, _email, _phoneNumber, _address, _applyFor, _experience, _currentCTC, _expectedCTC, _resumeBase64) {
        this._id = _id;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
        this._phoneNumber = _phoneNumber;
        this._address = _address;
        this._applyFor = _applyFor;
        this._experience = _experience;
        this._currentCTC = _currentCTC;
        this._expectedCTC = _expectedCTC;
        this._resumeBase64 = _resumeBase64;
    }
    /**
     * Getter id
     * @return {string}
     */
    get id() {
        return this._id;
    }
    /**
     * Getter firstName
     * @return {string}
     */
    get firstName() {
        return this._firstName;
    }
    /**
     * Setter firstName
     * @param {string} value
     */
    set firstName(value) {
        this._firstName = value;
    }
    /**
     * Getter lastName
     * @return {string}
     */
    get lastName() {
        return this._lastName;
    }
    /**
     * Setter lastName
     * @param {string} value
     */
    set lastName(value) {
        this._lastName = value;
    }
    /**
     * Getter email
     * @return {string}
     */
    get email() {
        return this._email;
    }
    /**
     * Setter email
     * @param {string} value
     */
    set email(value) {
        this._email = value;
    }
    /**
     * Getter phoneNumber
     * @return {string}
     */
    get phoneNumber() {
        return this._phoneNumber;
    }
    /**
     * Setter phoneNumber
     * @param {string} value
     */
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    /**
     * Getter address
     * @return {string}
     */
    get address() {
        return this._address;
    }
    /**
     * Setter address
     * @param {string} value
     */
    set address(value) {
        this._address = value;
    }
    /**
     * Getter applyFor
     * @return {string}
     */
    get applyFor() {
        return this._applyFor;
    }
    /**
     * Setter applyFor
     * @param {string} value
     */
    set applyFor(value) {
        this._applyFor = value;
    }
    /**
     * Getter experience
     * @return {string}
     */
    get experience() {
        return this._experience;
    }
    /**
     * Setter experience
     * @param {string} value
     */
    set experience(value) {
        this._experience = value;
    }
    /**
     * Getter currentCTC
     * @return {string}
     */
    get currentCTC() {
        return this._currentCTC;
    }
    /**
     * Setter currentCTC
     * @param {string} value
     */
    set currentCTC(value) {
        this._currentCTC = value;
    }
    /**
     * Getter expectedCTC
     * @return {string}
     */
    get expectedCTC() {
        return this._expectedCTC;
    }
    /**
     * Setter expectedCTC
     * @param {string} value
     */
    set expectedCTC(value) {
        this._expectedCTC = value;
    }
    /**
     * Getter resumeBase64
     * @return {string}
     */
    get resumeBase64() {
        return this._resumeBase64;
    }
    /**
     * Setter resumeBase64
     * @param {string} value
     */
    set resumeBase64(value) {
        this._resumeBase64 = value;
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Career.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'firstName' }),
    __metadata("design:type", String)
], Career.prototype, "_firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'lastName' }),
    __metadata("design:type", String)
], Career.prototype, "_lastName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'email' }),
    __metadata("design:type", String)
], Career.prototype, "_email", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'phoneNumber' }),
    __metadata("design:type", String)
], Career.prototype, "_phoneNumber", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'address' }),
    __metadata("design:type", String)
], Career.prototype, "_address", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'applyFor' }),
    __metadata("design:type", String)
], Career.prototype, "_applyFor", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'experience' }),
    __metadata("design:type", String)
], Career.prototype, "_experience", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'currentCTC' }),
    __metadata("design:type", String)
], Career.prototype, "_currentCTC", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'expectedCTC' }),
    __metadata("design:type", String)
], Career.prototype, "_expectedCTC", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'resumeBase64' }),
    __metadata("design:type", String)
], Career.prototype, "_resumeBase64", void 0);
exports.default = Career;
//# sourceMappingURL=Career.js.map