import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const Private = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext)

    if(!isAuthenticated){
        // Navegar até login
    }

    return children;
  }