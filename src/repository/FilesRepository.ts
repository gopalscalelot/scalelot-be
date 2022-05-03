import {autoInjectable} from "tsyringe";
import FileDTO from "../dto/FileDTO";
import AppUtils from "../utils/AppUtils";
import {instanceToPlain} from "class-transformer";
import FileEntity from "./entity/FileEntity";
import Logger from "../utils/Logger";

@autoInjectable()
export default class FilesRepository {
    public async saveFiles(files: FileDTO[]): Promise<any> {
        Logger.debug("Files Saving repo");
        return await FileEntity.insertMany(AppUtils.nullPropsRemover(instanceToPlain(files)));
    }
}