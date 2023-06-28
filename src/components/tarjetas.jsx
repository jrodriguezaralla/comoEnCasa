import React from 'react';
import Card from 'react-bootstrap/Card';
import Iconoenvios from '../assets/Iconoenvios.png';
import Iconoretiros from '../assets/Iconoretiros.png';
import Iconopedidos from '../assets/Iconopedidos.png';

import '../styles/tarjetas.css';

function Tarjetas() {
	return (
		<div className="container-style mt-5">
			<Card className="card-style p-2">
				<div className="d-flex justify-content-center align-item-center mt-2">
					<Card.Img variant="top" src={Iconopedidos} className="img-fluid image-style" />
				</div>
				<Card.Body className="card-body-style">
					<Card.Title className="title-style">Pedidos</Card.Title>
					<Card.Text className="body-style">Escribinos por nuestras redes para cotización y realizar tu pedido.</Card.Text>
				</Card.Body>
			</Card>

			<Card className="card-style p-2">
				<div className="d-flex justify-content-center align-item-center mt-2">
					<Card.Img variant="top" src={Iconoenvios} className="img-fluid image-style" />
				</div>
				<Card.Body className="card-body-style">
					<Card.Title className="title-style">Envíos</Card.Title>
					<Card.Text className="body-style">Realizamos envíos a zona norte: Beccar, San Isidro, Martínez (sin cargo)</Card.Text>
				</Card.Body>
			</Card>

			<Card className="card-style p-2">
				<div className="d-flex justify-content-center align-item-center mt-2">
					<Card.Img variant="top" src={Iconoretiros} className="img-fluid image-style" />
				</div>
				<Card.Body className="card-body-style">
					<Card.Title className="title-style">Retiros</Card.Title>
					<Card.Text className="body-style">Una vez realizado el pedido, te enviaremos información para el retiro de tu compra.</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Tarjetas;
