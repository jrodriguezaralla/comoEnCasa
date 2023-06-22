import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MesaDeCumple from "../assets/Tartadejamonyqueso.jpg";
import CajasDiasEspeciales from "../assets/Tapitasrogel.jpg";
import VariadosParaFrezzer from "../assets/Simplesdequeso.jpg";
import ComidaEventos from "../assets/Pizza.jpg";
import LogoWhatsapp from "../assets/Logowhatsapp.jpg";

function EventosEspeciales() {
  const cardStyle = {
    width: "25rem",
    height: "25rem",
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  };

  const titleStyle = {
    fontFamily: "Futura, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
    margin: 0,
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    borderBottom: "1px solid white",
  };

  const bodyStyle = {
    backgroundColor: "#4F2D24",
    color: "white",
    padding: "30px",
    margin: "10px 0",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  };

  const logoContainerStyle = {
    position: "absolute",
    right: "140px",
    bottom: "10px",
  };

  const logoStyle = {
    width: "80px",
    height: "80px",
    marginBottom: "475px",
    marginLeft: "15px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Futura, sans-serif" }}>
        Eventos Especiales
      </h1>

      <div style={containerStyle}>
        <div style={{ margin: "10px" }}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={MesaDeCumple} style={imageStyle} />
            <Card.Body style={bodyStyle}>
              <Card.Title style={titleStyle}>MESA DE CUMPLE</Card.Title>
            </Card.Body>
          </Card>

          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src={CajasDiasEspeciales}
              style={imageStyle}
            />
            <Card.Body style={bodyStyle}>
              <Card.Title style={titleStyle}>CAJAS DÍAS ESPECIALES</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div style={{ margin: "10px" }}>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src={VariadosParaFrezzer}
              style={imageStyle}
            />
            <Card.Body style={bodyStyle}>
              <Card.Title style={titleStyle}>VARIADOS PARA FREZZER</Card.Title>
            </Card.Body>
          </Card>

          <Card style={cardStyle}>
            <Card.Img variant="top" src={ComidaEventos} style={imageStyle} />
            <Card.Body style={bodyStyle}>
              <Card.Title style={titleStyle}>COMIDA EVENTOS</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div style={logoContainerStyle}>
          <a href="https://api.whatsapp.com/send?phone=005491123153229">
            <img src={LogoWhatsapp} alt="WhatsApp" style={logoStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventosEspeciales;
