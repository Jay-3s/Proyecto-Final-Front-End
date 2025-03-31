import { Outlet, Navigate } from "react-router-dom";
import { getUser } from "../utils/auth"; // se importa de utils


const ProtectedRoutes = ({ isAdmin = false }) => {
  
  const usuario = getUser(); // Verifica si al usuario

  // Autentica al usuario

  if (!usuario) {
    console.log("Usuario no autenticado. Redirigiendo a login...");
    return <Navigate to="/Login" />;
  }

  // Verifica el Rol del usuario
  if (isAdmin && usuario !== "Admin") {
    console.log("Usuario no tiene permisos de administrador. Redirigiendo...");
    return <Navigate to="/" />; // Se redirige al usuario a una página no limitada.
  }
  // Muestra al usuario la págna si ya fue autenticado
  return <Outlet />;
};

export default ProtectedRoutes;