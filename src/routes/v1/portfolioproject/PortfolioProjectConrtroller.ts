import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../utils/Logger";
import AsyncHandler from "../../../utils/AsyncHandler";
import {plainToInstance} from "class-transformer";
import PortfolioProject from "../../../dto/PortfolioProject";
import {SuccessResponse} from "../../../utils/ApiResponse";
import ResponseMessages from "../../../utils/statics/ResponseMessages";
import PortfolioProjectService from "../../../service/PortfolioProjectService";
import FileDTO from "../../../dto/FileDTO";

@autoInjectable()
export default class PortfolioProjectController {

    private _router: Router;
    private _portfolioProjectService: PortfolioProjectService;

    constructor(portfolioProjectService: PortfolioProjectService) {
        this._router = express.Router();
        this._portfolioProjectService = portfolioProjectService;
    }

    routes() {
        Logger.debug("Configuring Meta Keywords Router");
        this._router.post('/', AsyncHandler(async (req: any, res: any) => this.addPortfolioProject(req, res)));
        return this._router;
    }

    private async addPortfolioProject(req: any, res: any) {
        Logger.debug("Adding portfolio project");

        let portfolioProject: PortfolioProject = plainToInstance(PortfolioProject, req.body, {excludeExtraneousValues: true});

        let files: FileDTO[] = req.files.map((file: any) => {
            Logger.debug(file);
            let fileDTO: FileDTO = plainToInstance(FileDTO, file, { excludeExtraneousValues: true });
            fileDTO.buffer = file.buffer.toString("base64");
            return fileDTO;
        });

        Logger.debug("Files mapped");
        portfolioProject = await this._portfolioProjectService.addPortfolioProject(portfolioProject, files);
        Logger.debug("File and portfolio saved");

        return new SuccessResponse(ResponseMessages.CREATE_PORTFOLIO_PROJECT_SUCCESS, portfolioProject).send(res);
    }
}