import {Expose, Transform} from "class-transformer";
import {ObjectId} from "mongodb";

export default class Login{
    @Expose()
    @Transform(param => param.value ? (param.value as ObjectId).toString() : null)
    private readonly _id?: ObjectId;

    @Expose({name: "userName"})
    private _userName: string;

    @Expose({name: "password"})
    private _password: string;

    constructor(id: ObjectId, userName: string, password: string) {
        this._id = id;
        this._userName = userName;
        this._password = password;
    }

    get id(): ObjectId {
        return <ObjectId>this._id;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}