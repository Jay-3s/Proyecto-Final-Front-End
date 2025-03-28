import { Outlet, Navigate } from "react-router-dom";
import { getUser } from "../utils/auth"; // Asegúrate de que esta función esté correctamente implementada.
const ProtectedRoutes = ({ isAdmin = false }) => {
  const usuario = getUser(); // Verifica si el usuario está autenticado.
  // Verifica si el usuario está autenticado
  if (!usuario) {
    console.log("Usuario no autenticado. Redirigiendo a login...");
    return <Navigate to="/Login" />;
  }
  // Verifica si es necesario un rol de administrador y si el usuario tiene ese rol
  if (isAdmin && usuario !== "Admin") {
    console.log("Usuario no tiene permisos de administrador. Redirigiendo...");
    return <Navigate to="/" />; // Puedes redirigir a Home o a una página de acceso denegado.
  }
  // Si el usuario está autenticado y tiene los permisos necesarios, muestra la ruta
  return <Outlet />;
};
export default ProtectedRoutes;