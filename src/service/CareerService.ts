import 'reflect-metadata';
import Career from '../dto/Career';
import {autoInjectable} from "tsyringe";
import CareerRepository from '../repository/CareerRepository';
import FileDTO from "../dto/FileDTO";
import FileService from "./FileService";
import Logger from "../utils/Logger";

@autoInjectable()
export default class CareerService{

  private _careerRepository: CareerRepository;
  private _fileService: FileService;


  constructor(careerRepository: CareerRepository, fileService: FileService) {
    this._careerRepository = careerRepository;
    this._fileService = fileService;
  }

  public async createCareer(career: Career, files: FileDTO[]): Promise<Career> {

      const savedFiles: FileDTO[] = await this._fileService.saveFiles(files);
      Logger.debug(savedFiles.map(savedFile => savedFile.id));
      career.files = savedFiles.map(savedFile => savedFile.id);
      return this._careerRepository.saveCareer(career);
      
    }

    public async fetchAllCareer(): Promise<Career[]> {
        return this._careerRepository.getAllCareer();
    }
}