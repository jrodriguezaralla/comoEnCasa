import React, { useEffect } from "react";
import logo from "../assets/logo.png";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector("#header-logo");
      const header = document.querySelector("header");
      const h1 = document.querySelector("#header-title");

      if (window.scrollY > 0) {
        logo.style.opacity = "0";
        header.style.backgroundColor = "transparent";
        h1.style.opacity = "0";
      } else {
        logo.style.opacity = "1";
        header.style.backgroundColor = "white";
        h1.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: "white",
    padding: "10px",
    color: "#FFFFFF",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    zIndex: 100,
  };

  const logoStyle = {
    marginLeft: "60px",
    marginRight: "10px",
    marginTop: "1px",
    marginBottom: "1px",
    width: "400px",
    height: "auto",
    transition: "opacity 0.3s ease-in-out",
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
    marginRight: "40px",
    padding: "15px",
    width: "96%",
    transition: "opacity 0.3s ease-in-out", // Agregamos la transición de opacidad
  };

  const spanStyle = {
    marginBottom: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <header style={headerStyle}>
      <div>
        <img id="header-logo" src={logo} alt="Logo" style={logoStyle} />
      </div>
      <div style={{ marginRight: "20px" }}>
        <h1 id="header-title" style={h1Style}>
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
