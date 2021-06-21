import "reflect-metadata"
import { PatientDomainModel } from "./types/domain.types/patient.domain.types";
import { Loader } from './loader';
import * as path from 'path';
import * as fs from 'fs';
import { Helper } from './common/helper';
import { AddressDomainModel } from "./types/domain.types/address.domain.types";

////////////////////////////////////////////////////////////////////////////////////

export class Runner {

    public static async run() {
        await Runner.runPatientResourceWorkflows();
    }

    //#region Patient

    private static getPatientDomainModel = () => {

        var patientObj = Runner.readJsonResource('patient.domain.model.json');

        var address: AddressDomainModel = {
            Type: patientObj.Type != null ? patientObj.Type.toLowerCase() : 'official',
            AddressLine: patientObj.AddressLine ?? '',
            City: patientObj.City ?? '',
            District: patientObj.District ?? '',
            State: patientObj.State ?? '',
            Country: patientObj.Country ?? '',
            PostalCode: patientObj.PostalCode ?? ''
        };

        var model: PatientDomainModel = {
            Prefix: patientObj.Prefix,
            FirstName: patientObj.FirstName,
            MiddleName: patientObj.MiddleName,
            LastName: patientObj.LastName,
            Phone: patientObj.Phone,
            Email: patientObj.Email,
            Gender: patientObj.Gender,
            BirthDate: patientObj.BirthDate,
            Address: address
        }

        return model;
    }

    private static async runPatientResourceWorkflows() {
        var model = Runner.getPatientDomainModel();
        var patientFhirId = await Loader.PatientStore.create(model);
        var patientFhirResource = await Loader.PatientStore.getById(patientFhirId);
        var patientResourceStr = JSON.stringify(patientFhirResource, null, 2);
        console.log(patientResourceStr);
    }
    
    //#endregion


    //#region private helpers

    private static readJsonResource = (filename) => {
        const jsonPath = path.join(
            process.cwd(),
            '/data/',
            filename
        );
        if (!fs.existsSync(jsonPath)) {
            return null;
        }

        const rawdata = fs.readFileSync(jsonPath, {
            encoding: 'utf8',
            flag: 'r',
        });

        const obj = JSON.parse(rawdata);
        return obj;
    }

    //#endregion
}

