export interface Address {
    area: string;
    road: string;
}

export interface Person {
    givenName: string;
    surname: string;
    age: number;
    email: string;
    //address: Address;
    address: string;
}
