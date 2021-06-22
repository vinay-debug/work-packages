import { AddressDomainModel } from "./address.domain.types";
import { AppointmentDomainModel } from "./appointment.domain.types";
import { OrganizationDomainModel } from "./organization.domain.model";

export interface DiagnosticLabUserDomainModel {
    id?: string;
    Prefix?: string;
    FirstName?: string;
    LastName?: string;
    Phone: string;
    Email?: string;
    Gender?: string;
    BirthDate?: string;
    ImageURL?: string;
    Specialities?: string;
    Locality: string;
    Organizations?: OrganizationDomainModel[];
    Address: AddressDomainModel;
    AppointmentDetails: AppointmentDomainModel;
}
