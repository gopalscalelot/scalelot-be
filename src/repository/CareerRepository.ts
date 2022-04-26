import { instanceToPlain, plainToInstance } from "class-transformer";
import Career from "../dto/Career";
import AppUtils from "../utils/AppUtils";
import { autoInjectable } from "tsyringe";
import CareerEntity from "./entity/CareerEntity";

@autoInjectable()
export default class CareerRepository{

  public async saveCareer(career: Career): Promise<Career> {
    
    const careerEntity: any = new CareerEntity(AppUtils.nullPropsRemover(instanceToPlain(career)));
    await careerEntity.save();
    return plainToInstance(Career, careerEntity, {excludeExtraneousValues: true});

  }

}