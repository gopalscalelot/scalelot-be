import {Expose, Transform} from "class-transformer";
import {ObjectId} from "mongodb";

export default class ContactUs {

    @Expose()
    @Transform(param => param.value ? (param.value as ObjectId).toString() : null)
    private readonly _id?: ObjectId;

    constructor(id: ObjectId, name: string, companyName: string, email: string, phoneNumber: string, description: string) {
        this._id = id;
        this._name = name;
        this._companyName = companyName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._description = description;
    }

    @Expose({name: 'name'})
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    @Expose({name: 'companyName'})
    private _companyName: string;

    get companyName(): string {
        return this._companyName;
    }

    set companyName(value: string) {
        this._companyName = value;
    }

    @Expose({name: 'email'})
    private _email: string;

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    @Expose({name: 'phoneNumber'})
    private _phoneNumber: string;

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    @Expose({name: 'description'})
    private _description: string;

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get id(): ObjectId {
        return <ObjectId>this._id;
    }
}
