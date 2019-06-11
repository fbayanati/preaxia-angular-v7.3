import * as uuid from 'uuid';

export enum AccountType {
	Individual = 1,
	Corporation = 2
}

export enum AccountFundType {
    PreFunded = 1,
    PostFunded = 2
}

export class Address {
    constructor(
        address: string,
        city: string,
        province: string,
        postalCode: string
    ) {
    }
}

export class User {
    id: string;

    constructor(
        firstName: string,
        lastName: string,
        phone?: string,
        email?: string,
        birthday?: string,
        gender?: string,
        address?: Address
    ) {
        this.id = uuid.v4();
    }
}

export class Corporation {
    constructor(
        name: string,
        corporationRegistrationNumber?: string,
        address?: Address
    ) {
    }
}

export class Account {
    id: string;
    users: User[];
    adminId: string;
    accountType: AccountType;
    accountFundType: AccountFundType;

    constructor(
        type: AccountType,
        acceptServiceAgreements?: boolean
    ) {
        this.id = uuid.v4();
    }
}
