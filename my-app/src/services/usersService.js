import { api } from './api';

export const createUser = async (name, email, password) => {
  const createdUser = await api.post('/users', { name, email, password });
  return createdUser.data;
};

export const findAllUsers = async (userId) => {
  const users = await api.get(`/users/${userId}`);
  return users.data;
};

export const findOneUser = async (userId) => {
  const user = await api.get(`/users/${userId}`);
  return user.data;
};

export const updateUser = async (userId, updatedUserData) => {
  const userUpdated = await api.put(`/users/${userId}`, updatedUserData);
  return userUpdated.data;
};

export const removeUser = async (userId) => {
  const removedUser = await api.delete(`/users/${userId}`);
  return removedUser.data;
};
