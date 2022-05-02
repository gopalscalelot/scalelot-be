import {Expose, Transform} from "class-transformer";
import {ObjectId} from "mongodb";

export default class Testimonial {
    @Expose()
    @Transform(param => param.value ? (param.value as ObjectId).toString() : null)
    private readonly _id?: ObjectId;

    @Expose({name: 'rating'})
    private _rating: string;

    @Expose({name: 'clientName'})
    private _clientName: string;

    @Expose({name: 'clientDesignation'})
    private _clientDesignation: string;

    @Expose({name: 'review'})
    private _review: string;

    constructor(id: ObjectId, rating: string, clientName: string, clientDesignation: string, review: string) {
        this._id = id;
        this._rating = rating;
        this._clientName = clientName;
        this._clientDesignation = clientDesignation;
        this._review = review;
    }

    get id(): ObjectId {
        return <ObjectId>this._id;
    }

    get rating(): string {
        return this._rating;
    }

    set rating(value: string) {
        this._rating = value;
    }

    get clientName(): string {
        return this._clientName;
    }

    set clientName(value: string) {
        this._clientName = value;
    }

    get clientDesignation(): string {
        return this._clientDesignation;
    }

    set clientDesignation(value: string) {
        this._clientDesignation = value;
    }

    get review(): string {
        return this._review;
    }

    set review(value: string) {
        this._review = value;
    }
}