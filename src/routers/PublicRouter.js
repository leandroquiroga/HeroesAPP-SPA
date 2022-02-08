import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


export const PublicRouter = ({ children }) => {
  
  const { user } = useContext(AuthContext);
  
  // Si el usuario no esta autotenticado
  // muestra el el componente de login
  // en caso contrario muestra la pagina de inicio
  return (!user.logged) ?
        children
        :<Navigate to='/' />
};