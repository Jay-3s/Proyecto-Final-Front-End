import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <h3>Filtros de Búsqueda</h3>

      <div className="filtros">

        <span className="filtro">Colores</span>
        <span className="filtro">En Tendencia</span>
        <span className="filtro">Precio</span>
        <span className="filtro">Más Comprados</span>
        <span className="filtro">Rebajas</span>

      </div><br />

      <h3>Disponibles</h3>
      
      <input type="range" min="0" max="20" className="range"/>

    </aside>
  );
};

export default Sidebar;
