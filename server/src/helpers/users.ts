import { User } from '../Models';

import { hashPassword } from './auth';

export const createNewUser = async (firstName: string, lastName: string, email: string, username: string, password: string) => {
    const passwordHash: string = await hashPassword(password);
    return await User.create({
        firstName,
        lastName,
        email,
        username,
        password: passwordHash
    });
};

export const deleteUserById = async (id: string) => {
    await User.destroy({
        where: {
            id
        },
    });
};

export const getAllUsers = async () => {
    return await User.findAll({
        order: [['createdAt', 'DESC']],
    });
};

export const getUserByEmail = async (email: string) => {
    return await User.findOne({
        where: {
            email,
        },
    });
};

export const getUserById = async (id: string) => {
    return await User.findOne({
        where: {
            id,
        },
    });
};

export const getUserByUsername = async (username: string) => {
    return await User.findOne({
        where: {
            username,
        },
    });
};

export const updateUserPasswordByUsername = async (username: string, newPassword: string) => {
    const password: string = await hashPassword(newPassword);

    return await User.update({ password }, {
        where: {
            username,
        },
    });
};