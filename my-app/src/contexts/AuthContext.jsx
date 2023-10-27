import { createContext, useEffect, useState } from "react";
import { createSession } from "../services/authService";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
r
    const [user, setUser] = useState(null);


    useEffect(() => {
        checkAuthentication();
      }, []);
    
      const checkAuthentication = async () => {
        // Persistir o token
        // if (token) {
        //   setUser({ token });
        // }
      };

    const login = async (email, password) => {

        const { data } = await createSession(email, password)

        if (data && data.token) {
            const user = {
                id: data.id,
                name: data.name,
                email: data.email,
                token: data.token
            };
            // Persistir o token
            setUser(user);
            // Navegar para admin
        }
    };

    const logout = async () => {
        // Remover o token
        setUser(null);
        // Navegar para login
      };


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}