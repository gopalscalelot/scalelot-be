import {autoInjectable} from "tsyringe";
import Testimonial from "../dto/Testimonial";
import AppUtils from "../utils/AppUtils";
import {instanceToPlain, plainToInstance} from "class-transformer";
import TestimonialEntity from "./entity/TestimonialEntity";

@autoInjectable()
export default class TestimonialRepository {

    public async addTestimonial(testimonial: Testimonial): Promise<Testimonial> {
        const testimonialEntity = new TestimonialEntity(AppUtils.nullPropsRemover(instanceToPlain(testimonial)));
        await testimonialEntity.save();
        return plainToInstance(Testimonial, testimonialEntity, {excludeExtraneousValues: true});
    }
}