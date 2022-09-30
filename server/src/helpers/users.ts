import { User } from '../Models';
import { UserInstance } from '../Models/User';

import { hashPassword } from './auth';

export const createNewUser = async (
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string
): Promise<UserInstance> => {
  const passwordHash: string = await hashPassword(password);
  return await User.create({
    firstName,
    lastName,
    email,
    username,
    password: passwordHash,
  });
};

export const deleteUserById = async (id: string): Promise<Number> => User.destroy({
    where: {
      id,
    },
  });

export const getAllUsers = async (): Promise<Array<UserInstance>> => User.findAll({
    order: [['createdAt', 'DESC']],
  });

export const getUserByEmail = async (email: string): Promise<UserInstance | null> => User.findOne({
    where: {
      email,
    },
  });

export const getUserById = async (id: string): Promise<UserInstance | null> => User.findOne({
    where: {
      id,
    },
  });

export const getUserByUsername = async (username: string): Promise<UserInstance | null> => User.findOne({
    where: {
      username,
    },
  });

export const updateUserPasswordByUsername = async (
  username: string,
  newPassword: string
): Promise<Array<Number>> => {
  const password: string = await hashPassword(newPassword);

  return await User.update(
    { password },
    {
      where: {
        username,
      },
    }
  );
};
