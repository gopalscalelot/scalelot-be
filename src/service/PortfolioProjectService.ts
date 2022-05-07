import {autoInjectable} from "tsyringe";
import PortfolioProject from "../dto/PortfolioProject";
import PortfolioProjectRepository from "../repository/PortfolioProjectRepository";
import FileDTO from "../dto/FileDTO";
import FileService from "./FileService";
import Logger from "../utils/Logger";

@autoInjectable()
export default class PortfolioProjectService {

    private _portfolioProjectRepository: PortfolioProjectRepository;
    private _fileService: FileService;

    constructor(portfolioProjectRepository: PortfolioProjectRepository, fileService: FileService) {
        this._portfolioProjectRepository = portfolioProjectRepository;
        this._fileService = fileService;
    }

    public async addPortfolioProject(portfolioProject: PortfolioProject, files: FileDTO[]): Promise<PortfolioProject> {

        Logger.debug("Saving files");
        const savedFiles: FileDTO[] = await this._fileService.saveFiles(files);
        Logger.debug(savedFiles.map(savedFile => savedFile.id));

        Logger.debug("Saved files");
        Logger.debug(savedFiles.map(savedFile => savedFile.id));

        portfolioProject.files = savedFiles.map(savedFile => savedFile.id);

        return this._portfolioProjectRepository.addPortfolioProject(portfolioProject);
    }

    public async getAllPortfolio(): Promise<PortfolioProject[]> {
        return this._portfolioProjectRepository.getAllPortfolioProjects();
    }
}