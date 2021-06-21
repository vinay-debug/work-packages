import 'reflect-metadata';
import { IPatientStore } from '../interfaces/patient.store.interface';
import { injectable, inject } from "tsyringe";
import { PatientDomainModel, PatientSearchFilters } from '../types/domain.types/patient.domain.types';

///////////////////////////////////////////////////////////////////

@injectable()
export class PatientStore {

    constructor(@inject('IPatientStore') private _service: IPatientStore) {}

    create = async (model: PatientDomainModel): Promise<any> => {
        return await this._service.create(model);
    }

    search = async (filter: PatientSearchFilters): Promise<any> => {
        return await this._service.search(filter);
    }

    getById = async (id: string): Promise<any> => {
        return await this._service.getById(id);
    }

    update = async (id: string, updates: PatientDomainModel): Promise<any> => {
        return await this._service.update(id, updates);
    }

    delete = async (id: string): Promise<any> => {
        return await this._service.delete(id);
    }

}
