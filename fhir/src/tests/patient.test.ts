import { Loader } from "../loader";
import { PatientMapper } from "../types/mappers/patient.mapper";


describe('Patient resource: Storage, retrieval', () => {
    test('Given patient domain model, store patient resource to fhir interface, then returned id is valid uuid', async (done) => {

        var model = PatientMapper.convertJsonObjectToDomainModel();
        var patientFhirId = await Loader.PatientStore.create(model);
        var patientFhirResource = await Loader.PatientStore.getById(patientFhirId);
        var extractedName = patientFhirResource.name[0].family;
        expect(extractedName).toEqual(model.LastName);
        
        done();
    });
});
