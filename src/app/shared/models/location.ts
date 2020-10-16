
import { TimeZone, Coordinates } from './';

export interface Location {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: TimeZone
}