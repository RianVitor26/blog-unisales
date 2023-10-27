import { api } from "./api"

export const createSession = async (email, password) => {
    const authenticatedUser = await api.post('/auth/login', {email, password})
    return authenticatedUser
}