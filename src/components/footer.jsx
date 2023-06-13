import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#1EAEAC",
    color: "#FFFFFF",
    padding: "10px",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyle = {
    margin: "50px",
    padding: "10px",
    backgroundColor: "#FFFFFF",
    color: "#4F2D24",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <footer style={footerStyle}>
      <button style={buttonStyle}>Instagram</button>
      <button style={buttonStyle}>Facebook</button>
      <button style={buttonStyle}>WhatsApp</button>
    </footer>
  );
}

export default Footer;
