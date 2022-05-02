import {autoInjectable} from "tsyringe";
import Testimonial from "../dto/Testimonial";
import TestimonialRepository from "../repository/TestimonialRepository";

@autoInjectable()
export default class TestimonialService {

    private _testimonialRepository: TestimonialRepository;

    constructor(testimonialRepository: TestimonialRepository) {
        this._testimonialRepository = testimonialRepository;
    }

    public async addTestimonial(testimonial: Testimonial): Promise<Testimonial> {
        return this._testimonialRepository.addTestimonial(testimonial);
    }
}