import { api } from './api';

export const createPost = async (userId) => {
  const createdPost = await api.post(`users/${userId}/posts`);
  return createdPost.data;
};

export const findAllPosts = async () => {
  const posts = await api.get('/posts/all');
  return posts.data;
};

export const findUserPosts = async (userId) => {
  const posts = await api.get(`users/${userId}/posts`);
  return posts.data;
};

export const findOnePost = async (userId, postId) => {
  const post = await api.get(`users/${userId}/posts/${postId}`);
  return post.data;
};

export const updatePost = async (userId, postId, newPost) => {
  const updatedUser = await api.put(`users/${userId}/posts/${postId}`, newPost);
  return updatedUser.data;
};

export const removePost = async (userId, postId) => {
  const removedUser = await api.delete(`users/${userId}/posts/${postId}`);
  return removedUser.data;
};
