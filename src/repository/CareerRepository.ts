import {instanceToPlain, plainToInstance} from "class-transformer";
import Career from "../dto/Career";
import AppUtils from "../utils/AppUtils";
import {autoInjectable} from "tsyringe";
import CareerEntity from "./entity/CareerEntity";
import Logger from "../utils/Logger";

@autoInjectable()
export default class CareerRepository {

    public async saveCareer(career: Career): Promise<Career> {

        Logger.debug("Saving career");
        Logger.debug(career);
        const careerEntity: any = new CareerEntity(AppUtils.nullPropsRemover(instanceToPlain(career)));
        Logger.debug(careerEntity);
        await careerEntity.save();
        return plainToInstance(Career, careerEntity, {excludeExtraneousValues: true});

    }

    public async getAllCareer(): Promise<Career[]> {
        const contactUsList = await CareerEntity.find({});
        Logger.debug(contactUsList)
        return plainToInstance(Career, contactUsList, {excludeExtraneousValues: true});
    }
}