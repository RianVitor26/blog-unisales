import { createContext, useEffect, useState } from "react";
import { createSession } from "../services/authService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    useEffect(() => {
        checkAuthentication();
      }, []);
    
      const checkAuthentication = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setUser({ token });
        }
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
            await AsyncStorage.setItem('token', data.token);
            setUser(user);
            navigation.navigate('/admin');
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem('token');
        setUser(null);
        navigation.navigate('/auth/login');
      };


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}