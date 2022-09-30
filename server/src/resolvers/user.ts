import {
  checkPassword,
  generateAccessToken,
  isAuthenticated,
} from '../helpers/auth';
import {
  getAllUsers,
  getUserByEmail,
  getUserByUsername,
  updateUserPasswordByUsername,
} from '../helpers/users';
import { createNewUser, deleteUserById } from '../helpers/users';

export const resolveCreateUser = async (
  _: any,
  { firstName, lastName, email, username, password }: any
) => {
  const userByEmail = await getUserByEmail(email);
  if (userByEmail) throw new Error('This email address is already in use');

  const userByUsername = await getUserByUsername(username);
  if (userByUsername) throw new Error('This username is already in use');

  return await createNewUser(firstName, lastName, email, username, password);
};

export const resolveDeleteUser = async (
  _: any,
  { id }: any,
  { authToken }: any
) => {
  isAuthenticated(authToken);

  await deleteUserById(id);

  return { success: true, message: 'User deleted successfully' };
};

export const resolveGetAllUsers = async () => {
  return await getAllUsers();
};

export const resolveLoginWithEmail = async (
  _: any,
  { email, password }: any
) => {
  const user = await getUserByEmail(email);
  if (!user) throw new Error('No account found for that email');

  const isPasswordValid: boolean = await checkPassword(password, user.password);
  if (!isPasswordValid) throw new Error('Incorrect password');

  const token: string = generateAccessToken(user.id);

  return { token, id: user.id };
};

export const resolveUpdatePassword = async (
  _: any,
  { username, oldPassword, newPassword }: any,
  { authToken }: any
) => {
  isAuthenticated(authToken);

  if (oldPassword === newPassword)
    throw new Error(
      'Your new password must be different from your old password'
    );

  const user = await getUserByUsername(username);
  if (!user) throw new Error('User not found');

  const isPasswordValid: boolean = await checkPassword(
    oldPassword,
    user.password
  );
  if (!isPasswordValid) throw new Error('Passwords do not match');

  await updateUserPasswordByUsername(username, newPassword);

  return { success: true, message: 'Password updated successfully' };
};
