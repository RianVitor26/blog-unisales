import { api } from './api';

export const createUser = async (name, email, password) => {
  try {
    const createdUser = await api.post('/users', { name, email, password });
    return createdUser.data;
  } catch (error) {
    throw error;
  }
};

export const findAllUsers = async (userId) => {
  try {
    const users = await api.get(`/users/${userId}`);
    return users.data;
  } catch (error) {
    throw error;
  }
};

export const findOneUser = async (userId) => {
  try {
    const user = await api.get(`/users/${userId}`);
    return user.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId, updatedUserData) => {
  try {
    const userUpdated = await api.put(`/users/${userId}`, updatedUserData);
    return userUpdated.data;
  } catch (error) {
    throw error;
  }
};

export const removeUser = async (userId) => {
  try {
    const removedUser = await api.delete(`/users/${userId}`);
    return removedUser.data;
  } catch (error) {
    throw error;
  }
};
