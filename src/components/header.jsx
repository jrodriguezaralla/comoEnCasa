import React from "react";
import logo from "../assets/logo.png";

function Header() {
  const headerStyle = {
    backgroundColor: "white",
    padding: "10px",
    color: "#FFFFFF",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    marginRight: "40px",
    width: "200px",
    height: "auto",
  };

  const h1Style = {
    color: "white",
    backgroundColor: "#1EAEAC",
    fontSize: "15px",
    borderRadius: "10px",
    lineHeight: "1.2", // Reducimos el valor del line-height
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "20px", // Agregamos margen derecho al contenedor
    padding: "10px",
    width: "96%", // Ajustamos el ancho del bloque
  };

  const spanStyle = {
    marginBottom: "5px", // Reducimos el margen inferior
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <header style={headerStyle}>
      <div>
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>
      <div style={{ marginRight: "20px" }}>
        <h1 style={h1Style}>
          <div style={{ ...spanStyle, marginTop: "10px" }}>
            ¡Te doy la bienvenida a mi página web! Gracias por estar acá.
          </div>
          <div style={spanStyle}>
            En esta página podrás ver un poco de los productos que hago y
            conocerme. Todos son realizados por encargo y en forma casera.
          </div>
          <div style={spanStyle}>
            Te invito a recorrer mi página y contactarme para armar juntos la
            mejor propuesta personalizada.
          </div>
        </h1>
      </div>
    </header>
  );
}

export default Header;
