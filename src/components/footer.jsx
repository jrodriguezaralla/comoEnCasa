import React from "react";
import iconoFacebook from "../assets/IconoFacebook.png";
import iconoWhatsapp from "../assets/IconoWhatsapp.jpg";
import iconoInstagram from "../assets/IconoInstagram.png";
import fotojp from "../assets/fotojp.png";

function Footer() {
  const footerStyle = {
    backgroundColor: "#1EAEAC",
    color: "#FFFFFF",
    padding: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const boxStyle = {
    backgroundColor: "#04545c", // Color de la caja
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px",
    backgroundColor: "#FFFFFF",
    color: "#4F2D24",
    border: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    width: "35px",
    height: "35px",
    marginRight: "5px",
  };

  const textStyle = {
    fontFamily: "Futura, sans-serif",
    color: "#FFFFFF", // Color del texto
    fontSize: "14px", // Tamaño de la fuente
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <button style={buttonStyle}>
        <img src={iconoInstagram} alt="Instagram" style={iconStyle} />
      </button>
      <button style={buttonStyle}>
        <img src={iconoFacebook} alt="Facebook" style={iconStyle} />
      </button>
      <button style={buttonStyle}>
        <img src={iconoWhatsapp} alt="WhatsApp" style={iconStyle} />
      </button>
    </footer>
  );
}

export default Footer;
