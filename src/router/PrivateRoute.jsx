import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext"

// compo HOC que recibe compoHijo, componentes
export const PrivateRoute = ({children}) => {
    //usa info de un contexto
    const {logged} = useContext(AuthContext);
    //se usa un hook Location para info de la direccion donde esta parado.
    const {pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath); 

    // elige que hacer con el compo hijo, que 
    return (logged)
        ? children
        : <Navigate to="/login" />
}
