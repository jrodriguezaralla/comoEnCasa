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
    marginRight: "130px",
  };

  const iconStyle = {
    width: "35px",
    height: "35px",
  };

  const textStyle = {
    fontFamily: "Futura, sans-serif",
    color: "#FFFFFF", // Color del texto
    fontSize: "14px", // Tamaño de la fuente
    width: "100%",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "50px",
    height: "50px",
  };

  return (
    <footer style={footerStyle}>
      <a
        href="https://www.facebook.com/comoencasanorteysur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={buttonStyle}>
          <img
            src={iconoFacebook}
            alt="Facebook"
            style={{ ...iconStyle, ...imageStyle }}
          />
        </button>
      </a>
      <a
        href="https://www.instagram.com/comoencasa_norteysur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={buttonStyle}>
          <img
            src={iconoInstagram}
            alt="Instagram"
            style={{ ...iconStyle, ...imageStyle }}
          />
        </button>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=005491123153229"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={buttonStyle}>
          <img
            src={iconoWhatsapp}
            alt="WhatsApp"
            style={{ ...iconStyle, ...imageStyle }}
          />
        </button>
      </a>
    </footer>
  );
}

export default Footer;
