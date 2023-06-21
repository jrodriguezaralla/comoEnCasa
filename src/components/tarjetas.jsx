import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Iconoenvios from "../assets/Iconoenvios.png";
import Iconoretiros from "../assets/Iconoretiros.png";
import Iconopedidos from "../assets/Iconopedidos.png";

function BasicExample() {
  const cardStyle = {
    width: "18rem",
    height: "18rem", // Ajusta la altura para que coincida con el ancho y haga la tarjeta cuadrada
    margin: "10px",
    borderRadius: "10px", // Agrega bordes redondeados
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Agrega sombreado gris
  };

  const titleStyle = {
    color: "#4F2D24", // Color del texto del Card.Title
    fontFamily: "Futura-Bold, sans-serif", // Fuente Futura-Bold y fallback a sans-serif
    fontWeight: "bold", // Agrega negrita al título
    fontSize: "1.8rem", // Ajusta el tamaño del título
  };

  const bodyStyle = {
    color: "black", // Color del texto del Card.Body
    fontFamily: "Futura, sans-serif", // Fuente Futura y fallback a sans-serif
    fontSize: "1rem", // Ajusta el tamaño del título
  };

  const imageStyle = {
    width: "60%", // Ajusta el ancho de la imagen para reducir su tamaño
    height: "auto", // Ajusta la altura automáticamente para mantener la proporción
    marginBottom: "10px", // Agrega margen inferior para separar la imagen del texto
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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

export default BasicExample;
