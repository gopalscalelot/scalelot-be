import {Expose, Transform} from "class-transformer";
import mongoose from "mongoose";

export default class Testimonial {
    @Expose()
    @Transform(param => param.obj ? param.obj.id : null, {toClassOnly: true})
    private readonly _id?: string;

    @Expose({name: 'rating'})
    private _rating: string;

    @Expose({name: 'clientName'})
    private _clientName: string;

    @Expose({name: 'clientDesignation'})
    private _clientDesignation: string;

    @Expose({name: 'review'})
    private _review: string;

    @Expose({name: "files"})
    @Transform(params => {
            if(params.obj.files && params.obj.files.length != 0) {
                return params.obj.files;
            }
            return null;
        }, { toClassOnly: true }
    )
    private _files: mongoose.Types.ObjectId[];

    constructor(id: string, rating: string, clientName: string, clientDesignation: string, review: string, files: mongoose.Types.ObjectId[]) {
        this._id = id;
        this._rating = rating;
        this._clientName = clientName;
        this._clientDesignation = clientDesignation;
        this._review = review;
        this._files = files;
    }

    get id(): string {
        return <string>this._id;
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

    get files(): mongoose.Types.ObjectId[] {
        return this._files;
    }

    set files(value: mongoose.Types.ObjectId[]) {
        this._files = value;
    }
}