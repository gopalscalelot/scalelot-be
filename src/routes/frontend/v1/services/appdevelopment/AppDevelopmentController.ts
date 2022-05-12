import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../../utils/Logger";
import AsyncHandler from "../../../../../utils/AsyncHandler";
import Testimonial from "../../../../../dto/Testimonial";
import {TestimonialTagsEnum} from "../../../../../utils/enum/TestimonialTagsEnum";
import TestimonialService from "../../../../../service/TestimonialService";

@autoInjectable()
export default class AppDevelopmentController {
    private _router: Router;
    private _testimonialService: TestimonialService;

    constructor(testimonialService: TestimonialService) {
        Logger.debug("Initialising Service App Development FrontEnd Routes");
        this._router = express.Router();
        this._testimonialService = testimonialService;
    }

    routes() {
        Logger.debug("Configuring routes for Services App Development");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveAppDev(req, res)));
        this._router.get('/ios-app-development', AsyncHandler(async (req:any, res:any) => this.serveIosAppDev(req, res)));
        this._router.get('/android-app-development', AsyncHandler(async (req:any, res:any) => this.serveAndroidAppDev(req, res)));
        this._router.get('/hybrid-app-development', AsyncHandler(async (req:any, res:any) => this.serveHybridAppDev(req, res)));
        this._router.get('/flutter-app-development', AsyncHandler(async (req:any, res:any) => this.serveFlutterAppDev(req, res)));
        this._router.get('/react-native-app-development', AsyncHandler(async (req:any, res:any) => this.serveReactNativeAppDev(req, res)));
        return this._router;
    }

    private async serveAppDev(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials: Testimonial[] = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum.APP_DEVELOPMENT);
        return res.render('services/mobile-application-development', { title: 'Express', testimonials: filteredTestimonials });
    }

    private async serveIosAppDev(req: any, res: any) {
        return res.render('services/mobile-app-development/ios-native-development', { title: 'Express' });
    }

    private async serveAndroidAppDev(req: any, res: any) {
        return res.render('services/mobile-app-development/android-app-development', { title: 'Express' });
    }

    private async serveHybridAppDev(req: any, res: any) {
        return res.render('services/mobile-app-development/hybrid-app-development', { title: 'Express' });
    }

    private async serveFlutterAppDev(req: any, res: any) {
        return res.render('services/mobile-app-development/flutter-app-development', { title: 'Express' });
    }

    private async serveReactNativeAppDev(req: any, res: any) {
        return res.render('services/mobile-app-development/react-native-app-development', { title: 'Express' });
    }

}