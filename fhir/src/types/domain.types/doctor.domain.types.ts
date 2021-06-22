import { AddressDomainModel } from './address.domain.types';

export interface DoctorDomainModel {
    Prefix?: string;
    FirstName?: string;
    LastName?: string;
    Phone: string;
    Email?: string;
    Gender?: string;
    BirthDate?: string;
    ImageURL?: string;
    Locality?: string;
    Address?: AddressDomainModel;
    EstablishmentName?: string;
    Qualification?: string;
    Specialities?: string;
    AboutMe?: string;
    ProfessionalHighlights?: string;
    PractisingSince?: string;
    AppointmentDetails?: DoctorAppointmentDomainModel;
}

export interface DoctorAppointmentDomainModel {
    AppointmentSlotDuration: string;
    OperationalTimeZone: string;
    SendReminder: boolean;
    ReminderType: string;
    RemindClientBefore: string;
    CanBookBefore: string;
    AllowCancellation: boolean;
    CanCancelBefore: string;
    EnableLoyaltyProgram: boolean;
    AllowWalkiInAppointments: boolean;
    CanBookForNext: string;
    WorkingHours: string[];
    PaymentDetails: DoctorAppointmentPaymentDomainModel;
}

export interface DoctorAppointmentPaymentDomainModel {
    ConsultationFee: number;
    IsTaxable: boolean;
    TaxRate: number;
    PaymentRequiredBeforeBooking: boolean;
    PaymentPercentage: number;
    CancellationCharges: number;
}
