import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MesaDeCumple from "../assets/Tartadejamonyqueso.jpg";
import CajasDiasEspeciales from "../assets/Tapitasrogel.jpg";
import VariadosParaFrezzer from "../assets/Simplesdequeso.jpg";
import ComidaEventos from "../assets/Pizza.jpg";

function BasicExample1() {
  const cardStyle = {
    width: "27rem",
    height: "27rem",
    borderRadius: "50px",
    marginBottom: "40px",
  };

  const titleStyle = {
    fontFamily: "Futura, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "100%",
  };

  const bodyStyle = {
    backgroundColor: "#4F2D24",
    color: "white",
    padding: "30px",
    margin: 0,
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Futura, sans-serif" }}>
        Eventos Especiales
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "10px" }}
        >
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

        <div
          style={{ display: "flex", flexDirection: "column", margin: "10px" }}
        >
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
      </div>
    </div>
  );
}

export default BasicExample1;
