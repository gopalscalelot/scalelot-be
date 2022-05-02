import {autoInjectable} from "tsyringe";
import PortfolioProject from "../dto/PortfolioProject";
import AppUtils from "../utils/AppUtils";
import {instanceToPlain, plainToInstance} from "class-transformer";
import PortfolioProjectsEntity from "./entity/PortfolioProjectsEntity";

@autoInjectable()
export default class PortfolioProjectRepository {

    public async addPortfolioProject(portfolioProject: PortfolioProject): Promise<PortfolioProject> {
        const portfolioProjectEntity = new PortfolioProjectsEntity(AppUtils.nullPropsRemover(instanceToPlain(portfolioProject)));
        await portfolioProjectEntity.save();
        return plainToInstance(PortfolioProject, portfolioProjectEntity, {excludeExtraneousValues: true});
    }
}