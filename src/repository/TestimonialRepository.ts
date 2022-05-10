import {autoInjectable} from "tsyringe";
import Testimonial from "../dto/Testimonial";
import AppUtils from "../utils/AppUtils";
import {instanceToPlain, plainToInstance} from "class-transformer";
import TestimonialEntity from "./entity/TestimonialEntity";
import Logger from "../utils/Logger";
import PortfolioProjectsEntity from "./entity/PortfolioProjectsEntity";
import PortfolioProject from "../dto/PortfolioProject";

@autoInjectable()
export default class TestimonialRepository {

    public async addTestimonial(testimonial: Testimonial): Promise<Testimonial> {
        Logger.debug("Saving Testimonial")
        const testimonialEntity = new TestimonialEntity(AppUtils.nullPropsRemover(instanceToPlain(testimonial)));
        await testimonialEntity.save();
        Logger.debug("Saved Entity: " + JSON.stringify(testimonialEntity.toObject({minimize: true, versionKey: false})));
        return plainToInstance(Testimonial, JSON.stringify(testimonialEntity.toObject({minimize: true, versionKey: false})), {excludeExtraneousValues: true});
    }

    public async getAllTestimonails(): Promise<Testimonial[]> {
        let result = await TestimonialEntity.aggregate([{
            "$lookup": {
                from: 'files',
                localField: 'files',
                foreignField: '_id',
                as: 'images'
            }
        }]);
        Logger.debug(result);
        return plainToInstance(Testimonial, result,{excludeExtraneousValues: true});
    }
}