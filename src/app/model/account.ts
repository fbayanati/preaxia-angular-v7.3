import * as uuid from 'uuid';

enum AccountType {
	Individual,
	Corporation
}

class Address {
    constructor(
        address: string,
        city: string,
        province: string,
        postalCode: string
    ) {
    }
}

class User {
    id: string;

    constructor(
        firstName: string,
        lastName: string,
        phone?: string,
        email?: string,
        birthday?: string,
        address?: Address
    ) {
        this.id = uuid.v4();
    }
}

class Corporation {
    constructor(
        name: string,
        corporationRegistrationNumber?: string,
        address?: Address
    ) {
    }
}

class Account {
    id: string;
    users: User[];
    adminId: string;
    corporation?: Corporation

    constructor(
        type: AccountType,
        acceptServiceAgreements?: boolean
    ) {
        this.id = uuid.v4();
    }
}
