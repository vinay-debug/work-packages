
export interface AddressDomainModel {
    id?: string;
    Type: string;
    UserId?: string;
    OrganizationId?: string;
    AddressLine?: string;
    City?: string;
    District?: string;
    State?: string;
    Country?: string;
    PostalCode?: string;
    Location?: GeoLocation;
};

export interface GeoLocation {
    LocationCoords_Longitude: number;
    LocationCoords_Lattitude: number;
}
