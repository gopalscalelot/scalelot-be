import {autoInjectable} from "tsyringe";
import Testimonial from "../dto/Testimonial";
import TestimonialRepository from "../repository/TestimonialRepository";
import PortfolioProject from "../dto/PortfolioProject";
import FileDTO from "../dto/FileDTO";
import Logger from "../utils/Logger";
import FileService from "./FileService";
import {instanceToPlain} from "class-transformer";

@autoInjectable()
export default class TestimonialService {

    private _testimonialRepository: TestimonialRepository;
    private _fileService: FileService;

    constructor(testimonialRepository: TestimonialRepository, fileService: FileService) {
        this._testimonialRepository = testimonialRepository;
        this._fileService = fileService;
    }

    public async addTestimonial(testimonial: Testimonial, files: FileDTO[]): Promise<Testimonial> {
        Logger.debug("Saving files");
        const savedFiles: FileDTO[] = await this._fileService.saveFiles(files);

        testimonial.files = savedFiles.map(savedFile => savedFile.id);
        Logger.debug("Files saved");
        return this._testimonialRepository.addTestimonial(testimonial);
    }
}