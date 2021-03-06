
// import { PatientDomainModel } from "../domain.types/patient.domain.types";

import { Helper } from "../../common/helper";
import { AddressDomainModel } from "../domain.types/address.domain.types";
import { PatientDomainModel } from "../domain.types/patient.domain.types";

///////////////////////////////////////////////////////////////////////////////////

export class PatientMapper {

    public static convertJsonObjectToDomainModel = () => {

        var patientObj = Helper.readJsonResource('patient.domain.model.json');

        var address: AddressDomainModel = {
            Type: patientObj.Address.Type != null ? patientObj.Address.Type.toLowerCase() : 'official',
            AddressLine: patientObj.Address.AddressLine ?? '',
            City: patientObj.Address.City ?? '',
            District: patientObj.Address.District ?? '',
            State: patientObj.Address.State ?? '',
            Country: patientObj.Address.Country ?? '',
            PostalCode: patientObj.Address.PostalCode ?? ''
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

    // static toDetailsDto = async (patient: Patient): Promise<PatientDetailsDto> => {

    //     if(patient == null){
    //         return null;
    //     }

    //     var userRepo = new UserRepo();
    //     const user = await userRepo.getById(patient.UserId);

    //     var addressRepo = new AddressRepo();
    //     const address = await addressRepo.getByUserId(user.id);

    //     var dto: PatientDetailsDto = {
    //         id: patient.id,
    //         UserId: user.id,
    //         DisplayId: patient.DisplayId,
    //         EhrId: patient.EhrId,
    //         UserName: user.UserName,
    //         Prefix: user.Prefix,
    //         FirstName: user.FirstName,
    //         MiddleName: user.MiddleName,
    //         LastName: user.LastName,
    //         DisplayName: user.DisplayName,
    //         Gender: user.Gender,
    //         BirthDate: user.BirthDate,
    //         Age: user.Age,
    //         Phone: user.Phone,
    //         Email: user.Email,
    //         ImageResourceId: user.ImageResourceId,
    //         ActiveSince: user.ActiveSince,
    //         IsActive: user.IsActive,
    //         LastLogin: user.LastLogin,
    //         DefaultTimeZone: user.DefaultTimeZone,
    //         CurrentTimeZone: user.CurrentTimeZone,
    //         Address: address,
    //         MedicalProfile: null, //PatientMedicalProfileDto;
    //         Insurances: [], //PatientInsuranceDto[];
    //         EmergencyContacts: [], // PatientEmergencyContactDto[];
    //     };
    //     return dto;
    // }

    // static toDto = async (patient: Patient): Promise<PatientDto> => {

    //     if(patient == null){
    //         return null;
    //     }

    //     var userRepo = new UserRepo();
    //     const user = await userRepo.getById(patient.UserId);

    //     var dto: PatientDto = {
    //         id: patient.id,
    //         UserId: user.id,
    //         DisplayId: patient.DisplayId,
    //         EhrId: patient.EhrId,
    //         DisplayName: user.DisplayName,
    //         UserName: user.UserName,
    //         Phone: user.Phone,
    //         Email: user.Email,
    //         Gender: user.Gender,
    //         BirthDate: user.BirthDate,
    //         Age: user.Age,
    //     };
    //     return dto; 
    // }
}