
export interface AppointmentProvisionDomainModel {
    ProviderType: string;
    ProviderId? : string;
    ProviderOrganizationId?: string;
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
    PaymentDetails: AppointmentPaymentDomainModel;
}

export interface AppointmentPaymentDomainModel {
    AppointmentId?: string;
    Fee: number;
    IsTaxable: boolean;
    TaxRate: number;
    PaymentRequiredBeforeBooking: boolean;
    PaymentPercentage: number;
    CancellationCharges: number;
}
