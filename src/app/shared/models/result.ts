import {Name, Location, ID, Login, DOB, Registered, Picture} from './';


export interface Result {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DOB;
    registered: Registered;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
}