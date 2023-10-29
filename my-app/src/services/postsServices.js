import { api } from './api';

export const createPost = async (userId) => {
  try {
    const createdPost = await api.post(`users/${userId}/posts`);
    return createdPost.data;
  } catch (error) {
    throw error;
  }
};

export const findAllPosts = async () => {
  try {
    const posts = await api.get('/posts/all');
    return posts.data;
  } catch (error) {
    throw error;
  }
};

export const findUserPosts = async (userId) => {
  try {
    const posts = await api.get(`users/${userId}/posts`);
    return posts.data;
  } catch (error) {
    throw error;
  }
};

export const findOnePost = async (userId, postId) => {
  try {
    const post = await api.get(`users/${userId}/posts/${postId}`);
    return post.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (userId, postId, newPost) => {
  try {
    const updatedUser = await api.put(`users/${userId}/posts/${postId}`, newPost);
    return updatedUser.data;
  } catch (error) {
    throw error;
  }
};

export const removePost = async (userId, postId) => {
  try {
    const removedUser = await api.delete(`users/${userId}/posts/${postId}`);
    return removedUser.data;
  } catch (error) {
    throw error;
  }
};
