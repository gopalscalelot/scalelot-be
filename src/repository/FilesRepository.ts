import {autoInjectable} from "tsyringe";
import FileDTO from "../dto/FileDTO";
import AppUtils from "../utils/AppUtils";
import {instanceToPlain, plainToInstance} from "class-transformer";
import FileEntity from "./entity/FileEntity";
import Logger from "../utils/Logger";

@autoInjectable()
export default class FilesRepository {
    public async saveFiles(files: FileDTO[]): Promise<FileDTO[]> {
        Logger.debug("Files Saving repo");
        const filesList = await FileEntity.insertMany(AppUtils.nullPropsRemover(instanceToPlain(files)));

        return plainToInstance(FileDTO, filesList, {excludeExtraneousValues: true});
    }
}