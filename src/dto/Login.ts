import {Expose} from "class-transformer";

export default class Login{
    @Expose({name: "userName"})
    private _userName: string;

    @Expose({name: "password"})
    private _password: string;

    constructor(userName: string, password: string) {
        this._userName = userName;
        this._password = password;
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