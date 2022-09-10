import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const {login} = useContext(AuthContext); // para usar un contexto, imp el useHerramienta, y el contexto que usa esa herramienta.
  const navigate = useNavigate();

  const onLogin = ()=> {
    
    login('Ricardo');

    navigate('/', { replace: true});
  }
  
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-secondary"
        onClick={onLogin}>
          Login
        </button>
    </div>
  )
}
