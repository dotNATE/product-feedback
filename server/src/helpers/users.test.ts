import { getUserByEmail } from './users';

import { users } from '../testData';
import { User } from '../Models'

describe("getUserByEmail", () => {
    it("tries to find a user with the email provided", async () => {
        const user = users[0]
        const userSpy = jest.spyOn(User, 'findOne');
        const userArgs = { where: { email: user.email } };

        await getUserByEmail(user.email);

        expect(userSpy).toBeCalledWith(userArgs);
    });
});