import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../../utils/Logger";
import AsyncHandler from "../../../../../utils/AsyncHandler";
import Testimonial from "../../../../../dto/Testimonial";
import {TestimonialTagsEnum} from "../../../../../utils/enum/TestimonialTagsEnum";
import TestimonialService from "../../../../../service/TestimonialService";

@autoInjectable()
export default class GraphicDesignController {
    private _router: Router;
    private _testimonialService: TestimonialService;

    constructor(testimonialService: TestimonialService) {
        Logger.debug("Initialising Service Graphic Design FrontEnd Routes");
        this._router = express.Router();
        this._testimonialService = testimonialService;
    }

    routes() {
        Logger.debug("Configuring routes for Services Graphic Design");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveGraphicDesign(req, res)));
        this._router.get('/logo-design', AsyncHandler(async (req:any, res:any) => this.serveLogoDesign(req, res)));
        this._router.get('/branding-design', AsyncHandler(async (req:any, res:any) => this.serveBrandingDesign(req, res)));
        this._router.get('/mockups-design', AsyncHandler(async (req:any, res:any) => this.serveMockupDesign(req, res)));
        this._router.get('/infographic-design', AsyncHandler(async (req:any, res:any) => this.serveInfoGraphicDesign(req, res)));
        this._router.get('/social-media-post-design', AsyncHandler(async (req:any, res:any) => this.serveSMPostDesign(req, res)));
        this._router.get('/banner-design', AsyncHandler(async (req:any, res:any) => this.serveBannerDesign(req, res)));
        return this._router;
    }

    private async serveGraphicDesign(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials: Testimonial[] = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum.GRAPHIC_DESIGN);
        return res.render('services/graphics-design', { title: 'Express', testimonials: filteredTestimonials });
    }

    private async serveLogoDesign(req: any, res: any) {
        return res.render('services/graphics-design/logo-design', { title: 'Express' });
    }

    private async serveBrandingDesign(req: any, res: any) {
        return res.render('services/graphics-design/branding-design', { title: 'Express' });
    }

    private async serveMockupDesign(req: any, res: any) {
        return res.render('services/graphics-design/mockups-design', { title: 'Express' });
    }

    private async serveInfoGraphicDesign(req: any, res: any) {
        return res.render('services/graphics-design/infographic-design', { title: 'Express' });
    }

    private async serveSMPostDesign(req: any, res: any) {
        return res.render('services/graphics-design/social-media-design', { title: 'Express' });
    }

    private async serveBannerDesign(req: any, res: any) {
        return res.render('services/graphics-design/banner-card-design', { title: 'Express' });
    }

}