import { faker } from '@faker-js/faker';

export class RandomUserGenerator {

    static getRandomUserData() {
        const password = faker.internet.password()
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.number(),
            password: password,
            confirmPassword: password,
        };
    }
}