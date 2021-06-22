import { AddressDomainModel } from './address.domain.types';
import { AppointmentDomainModel } from './appointment.domain.types';
import { OrganizationDomainModel } from './organization.domain.model';

export interface DoctorDomainModel {
    Prefix?: string;
    FirstName?: string;
    LastName?: string;
    Phone: string;
    Email?: string;
    Gender?: string;
    BirthDate?: string;
    ImageURL?: string;
    EstablishmentName?: string;
    Qualification?: string;
    Specialities?: string;
    AboutMe?: string;
    ProfessionalHighlights?: string;
    PractisingSince?: string;
    Locality?: string;
    Organizations?: OrganizationDomainModel[];
    Address?: AddressDomainModel;
    AppointmentDetails?: AppointmentDomainModel;
}
