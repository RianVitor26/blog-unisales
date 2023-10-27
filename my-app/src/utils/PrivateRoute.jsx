import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const Private = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext)

    if(!isAuthenticated){
        navigation.navigate('/auth/login');
    }

    return children;
  }