import {Expose, Transform} from "class-transformer";
import {ObjectId} from "mongodb";

export default class Career {

    @Expose()
    @Transform(param => param.value ? (param.value as ObjectId).toString() : null)
    private readonly _id?: ObjectId;

    constructor(id: ObjectId, firstName: string, lastName: string, email: string, phoneNumber: string, address: string, applyFor: string, experience: string, currentCTC: string, expectedCTC: string, files: ObjectId[]) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._applyFor = applyFor;
        this._experience = experience;
        this._currentCTC = currentCTC;
        this._expectedCTC = expectedCTC;
        this._files = files;
    }

    @Expose({name: 'firstName'})
    private _firstName: string;

    /**
     * Getter firstName
     * @return {string}
     */
    public get firstName(): string {
        return this._firstName;
    }

    /**
     * Setter firstName
     * @param {string} value
     */
    public set firstName(value: string) {
        this._firstName = value;
    }

    @Expose({name: 'lastName'})
    private _lastName: string;

    /**
     * Getter lastName
     * @return {string}
     */
    public get lastName(): string {
        return this._lastName;
    }

    /**
     * Setter lastName
     * @param {string} value
     */
    public set lastName(value: string) {
        this._lastName = value;
    }

    @Expose({name: 'email'})
    private _email: string;

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    @Expose({name: 'phoneNumber'})
    private _phoneNumber: string;

    /**
     * Getter phoneNumber
     * @return {string}
     */
    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    /**
     * Setter phoneNumber
     * @param {string} value
     */
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    @Expose({name: 'address'})
    private _address: string;

    /**
     * Getter address
     * @return {string}
     */
    public get address(): string {
        return this._address;
    }

    /**
     * Setter address
     * @param {string} value
     */
    public set address(value: string) {
        this._address = value;
    }

    @Expose({name: 'applyFor'})
    private _applyFor: string;

    /**
     * Getter applyFor
     * @return {string}
     */
    public get applyFor(): string {
        return this._applyFor;
    }

    /**
     * Setter applyFor
     * @param {string} value
     */
    public set applyFor(value: string) {
        this._applyFor = value;
    }

    @Expose({name: 'experience'})
    private _experience: string;

    /**
     * Getter experience
     * @return {string}
     */
    public get experience(): string {
        return this._experience;
    }

    /**
     * Setter experience
     * @param {string} value
     */
    public set experience(value: string) {
        this._experience = value;
    }

    @Expose({name: 'currentCTC'})
    private _currentCTC: string;

    /**
     * Getter currentCTC
     * @return {string}
     */
    public get currentCTC(): string {
        return this._currentCTC;
    }

    /**
     * Setter currentCTC
     * @param {string} value
     */
    public set currentCTC(value: string) {
        this._currentCTC = value;
    }

    @Expose({name: 'expectedCTC'})
    private _expectedCTC: string;

    /**
     * Getter expectedCTC
     * @return {string}
     */
    public get expectedCTC(): string {
        return this._expectedCTC;
    }

    /**
     * Setter expectedCTC
     * @param {string} value
     */
    public set expectedCTC(value: string) {
        this._expectedCTC = value;
    }

    @Expose({name: "files"})
    private _files: ObjectId[];

    get files(): ObjectId[] {
        return this._files;
    }

    set files(value: ObjectId[]) {
        this._files = value;
    }

    get id(): ObjectId {
        return <ObjectId>this._id;
    }
}