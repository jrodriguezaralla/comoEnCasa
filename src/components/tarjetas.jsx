import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Iconoenvios from "../assets/Iconoenvios.png";
import Iconoretiros from "../assets/Iconoretiros.png";
import Iconopedidos from "../assets/Iconopedidos.png";

function Tarjetas() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    margin: "0 35px", // Ajusta el margen horizontal
    position: "relative",
  };

  const cardStyle = {
    width: "22rem",
    height: "22rem",
    margin: "35px", // Modifica el valor del margen
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  };

  const titleStyle = {
    color: "#4F2D24", // Color del texto del Card.Title
    fontFamily: "Futura-Bold, sans-serif",
    fontWeight: "bold", // Agrega negrita al título
    fontSize: "1.8rem", // Ajusta el tamaño del título
  };

  const bodyStyle = {
    color: "black", // Color del texto del Card.Body
    fontFamily: "Futura, sans-serif",
    fontSize: "1rem", // Ajusta el tamaño del título
  };

  const imageStyle = {
    width: "60%", // Ajusta el ancho de la imagen para reducir su tamaño
    height: "auto", // Ajusta la altura automáticamente
    marginBottom: "10px", // Agrega margen inferior para separar la imagen del texto
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={Iconopedidos} style={imageStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>Pedidos</Card.Title>
          <Card.Text style={bodyStyle}>
            Escribinos por nuestras redes para cotización y realizar tu pedido.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant="top" src={Iconoenvios} style={imageStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>Envíos</Card.Title>
          <Card.Text style={bodyStyle}>
            Realizamos envíos a zona norte: Beccar, San Isidro, Martínez (sin
            cargo)
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant="top" src={Iconoretiros} style={imageStyle} />
        <Card.Body>
          <Card.Title style={titleStyle}>Retiros</Card.Title>
          <Card.Text style={bodyStyle}>
            Una vez realizado el pedido, te enviaremos información para el
            retiro de tu compra.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tarjetas;
