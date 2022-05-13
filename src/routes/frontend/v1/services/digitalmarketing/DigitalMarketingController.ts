import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../../utils/Logger";
import AsyncHandler from "../../../../../utils/AsyncHandler";
import TestimonialService from "../../../../../service/TestimonialService";
import Testimonial from "../../../../../dto/Testimonial";
import {TestimonialTagsEnum} from "../../../../../utils/enum/TestimonialTagsEnum";

@autoInjectable()
export default class DigitalMarketingController {
    private _router: Router;
    private _testimonialService: TestimonialService;

    constructor(testimonialService: TestimonialService) {
        Logger.debug("Initialising Service Digital Marketing FrontEnd Routes");
        this._router = express.Router();
        this._testimonialService = testimonialService;
    }

    routes() {
        Logger.debug("Configuring routes for Services Digital Marketing");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveDigitalMarketing(req, res)));
        this._router.get('/seo', AsyncHandler(async (req:any, res:any) => this.serveSeoMarketing(req, res)));
        this._router.get('/sem-ppc', AsyncHandler(async (req:any, res:any) => this.serveSemPpcMarketing(req, res)));
        this._router.get('/smm', AsyncHandler(async (req:any, res:any) => this.serveSMMMarketing(req, res)));
        return this._router;
    }

    private async serveDigitalMarketing(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials: Testimonial[] = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum.DIGITAL_MARKETING);
        return res.render('services/digital-marketing', { title: 'Express', testimonials: filteredTestimonials });
    }

    private async serveSeoMarketing(req: any, res: any) {
        return res.render('services/digital-marketing/seo-services', { title: 'Express' });
    }

    private async serveSemPpcMarketing(req: any, res: any) {
        return res.render('services/digital-marketing/sem-ppc-management', { title: 'Express' });
    }

    private async serveSMMMarketing(req: any, res: any) {
        return res.render('services/digital-marketing/social-media-marketing', { title: 'Express' });
    }

}