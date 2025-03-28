export const getUser = () => {
    const user = JSON.parse(localStorage.getItem("usuario"));
    return user ? user : null;  // Retorna el usuario o null si no está logueado
  };