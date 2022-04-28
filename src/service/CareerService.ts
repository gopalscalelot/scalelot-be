import 'reflect-metadata';
import Career from '../dto/Career';
import Logger from '../utils/Logger';
import { autoInjectable } from "tsyringe";
import { instanceToPlain } from 'class-transformer';
import CareerRepository from '../repository/CareerRepository';

@autoInjectable()
export default class CareerService{

  private _careerRepository: CareerRepository;


  constructor(_careerRepository: CareerRepository) {
    this._careerRepository = _careerRepository
  }

    public async createCareer(career: Career): Promise<Career> {
      
      return this._careerRepository.saveCareer(career);
      
    }

    public async fetchAllCareer(): Promise<Career[]> {
        return this._careerRepository.getAllCareer();
    }
}