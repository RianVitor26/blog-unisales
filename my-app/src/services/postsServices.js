import { api } from './api'

export const createPost = async (userId) => {
    return await api.post(`users/${userId}/posts/`)
}

export const findAllPosts = async (userId) => {
    const posts = await api.get(`users/${userId}/posts`)
    return posts.data
}

export const findOnePost = async (userId, postId) => {
    const post = await api.get(`users/${userId}/posts/${postId}`)
    return post.data
}


export const updatePost = async (userId, postId, newPost) => {
    const updatedPost = await api.put(`users/${userId}/posts/${postId}`, newPost)
    return updatedPost.data
}

export const removePost = async (userId, postId) => {
    return await api.delete(`users/${userId}/posts/${postId}`)
}