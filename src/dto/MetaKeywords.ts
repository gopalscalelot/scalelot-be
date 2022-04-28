import {Expose, Transform} from "class-transformer";
import {ObjectId} from "mongodb";

export default class MetaKeywords {
    @Expose()
    @Transform(param => param.value ? (param.value as ObjectId).toString() : null)
    private readonly _id?: ObjectId;

    @Expose({name: "country"})
    private _country: string;

    @Expose({name: "page"})
    private _page: string;

    @Expose({name: "keywords"})
    private _keywords: string;

    constructor(id: ObjectId, country: string, page: string, keywords: string) {
        this._id = id;
        this._country = country;
        this._page = page;
        this._keywords = keywords;
    }

    get id(): ObjectId {
        return <ObjectId>this._id;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    get page(): string {
        return this._page;
    }

    set page(value: string) {
        this._page = value;
    }

    get keywords(): string {
        return this._keywords;
    }

    set keywords(value: string) {
        this._keywords = value;
    }
}
