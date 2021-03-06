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
        let savedFiles: Array<any> = await FileEntity.insertMany(AppUtils.nullPropsRemover(instanceToPlain(files)));
        Logger.debug("Saved Files: ");
        Logger.debug(savedFiles);
        let fileDTOs: FileDTO[] = [];
        savedFiles.forEach(file => fileDTOs.push(plainToInstance(FileDTO, file, {excludeExtraneousValues: true})));
        Logger.debug("Files saved:")
        Logger.debug(fileDTOs.map(file => file.id));
        return fileDTOs;
    }
}