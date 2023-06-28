import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MesaDeCumple from '../assets/tortas.jpeg';
import CajasDiasEspeciales from '../assets/alfajores.jpg';
import VariadosParaFrezzer from '../assets/bondiola.jpg';
import ComidaEventos from '../assets/Pizza.jpg';

import '../styles/eventosespeciales.css';

function EventosEspeciales() {
	const cardStyle = {
		width: '424px',
		height: '424px',
		marginBottom: '40px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		position: 'relative',
	};

	const containerStyle = {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		flexWrap: 'wrap',
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center', fontFamily: 'Futura, sans-serif' }}>Eventos Especiales</h1>

			<Row className="g-4 d-flex justify-content-center align-item-center mb-5 w-100">
				<Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end align-item-center">
					<Card className="card-container d-flex flex-column p-0 border border-0 my-3">
						<Card.Img variant="top" src={MesaDeCumple} className="overflow-hidden card-image-style img-fluid" />
						<Card.Body className="card-body-es">
							<Card.Title className="card-title-es">MESA DE CUMPLE</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start align-item-center">
					<Card className="card-container d-flex flex-column p-0 border border-0 my-3">
						<Card.Img variant="top" src={CajasDiasEspeciales} className="overflow-hidden card-image-style img-fluid" />
						<Card.Body className="card-body-es">
							<Card.Title className="card-title-es">CAJA DIAS ESPECIALES</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end align-item-center">
					<Card className="card-container d-flex flex-column p-0 border border-0 my-3">
						<Card.Img variant="top" src={VariadosParaFrezzer} className="overflow-hidden card-image-style img-fluid" />
						<Card.Body className="card-body-es">
							<Card.Title className="card-title-es">VARIADOS PARA FREZZER</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start align-item-center">
					<Card className="card-container d-flex flex-column p-0 border border-0 my-3">
						<Card.Img variant="top" src={ComidaEventos} className="overflow-hidden card-image-style img-fluid" />
						<Card.Body className="card-body-es">
							<Card.Title className="card-title-es">COMIDA EVENTOS</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default EventosEspeciales;
