import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Filtros de Búsqueda</h3>
      <div className="filtros">
        <span className="filtro">Spring </span>
        <span className="filtro">Smart </span>
        <span className="filtro">Modern </span>
      </div>
      <label>Price</label>
      <input type="range" min="0" max="100" />
    </aside>
  );
};

export default Sidebar;
