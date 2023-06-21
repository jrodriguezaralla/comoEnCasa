import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const headerStyle = {
    backgroundColor: "white",
    padding: "10px",
    color: "#FFFFFF",
    width: "100%",
    display: isHeaderVisible ? "flex" : "none", // Mostrar u ocultar el encabezado según el estado isHeaderVisible
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    marginLeft: "60px", // Ajusta el margen izquierdo del logo
    marginRight: "10px", // Ajusta el margen derecho del logo
    marginTop: "1px", // Ajusta el margen superior del logo
    marginBottom: "1px", // Ajusta el margen inferior del logo
    width: "400px",
    height: "auto",
  };

  const h1Style = {
    fontFamily: "Futura, sans-serif",
    color: "white",
    backgroundColor: "#1EAEAC",
    fontSize: "15px",
    borderRadius: "10px",
    lineHeight: "1.2",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "40px", // Ajusta el margen derecho de la sección "¡Te doy la bienvenida a mi página web!"
    padding: "15px",
    width: "96%",
  };

  const spanStyle = {
    marginBottom: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleScroll = () => {
    const isScrolledToTop = window.scrollY === 0;
    setIsHeaderVisible(isScrolledToTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
