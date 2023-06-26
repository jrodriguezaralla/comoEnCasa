import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MesaDeCumple from '../assets/tortas.jpeg';
import CajasDiasEspeciales from '../assets/alfajores.jpg';
import VariadosParaFrezzer from '../assets/bondiola.jpg';
import ComidaEventos from '../assets/Pizza.jpg';
import LogoWhatsapp from '../assets/Logowhatsapp.jpg';

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

	const titleStyle = {
		fontFamily: 'Futura, sans-serif',
		fontWeight: 'bold',
		fontSize: '20px',
		textAlign: 'center',
		margin: 0,
	};

	const imageStyle = {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		borderTopLeftRadius: '50px',
		borderTopRightRadius: '50px',
	};

	const bodyStyle = {
		backgroundColor: '#4F2D24',
		color: 'white',
		padding: '45px',
		margin: '3px 0',
		borderBottomLeftRadius: '50px',
		borderBottomRightRadius: '50px',
		fontFamily: 'Futura-Bold, sans-serif', // Cambiado a Futura-Bold
		fontSize: '20px', // Modificado el tamaño a 20px
		textAlign: 'center',
	};

	const containerStyle = {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
	};

	const logoContainerStyle = {
		position: 'absolute',
		right: '140px',
		bottom: '10px',
	};

	const [isHovered, setIsHovered] = useState(false);

	const logoStyle = {
		width: '100px',
		height: '100px',
		position: 'fixed',
		top: '85%',
		left: '90%',
		// marginBottom: '475px',
		// marginLeft: '15px',
		borderRadius: '35%',
		boxShadow: isHovered ? '4px 4px 5px 1px rgba(0, 0, 0, 0.3)' : '2px 4px 5px 0px rgba(0, 0, 0, 0.2)',
		transition: 'box-shadow 0.3s ease',
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center', fontFamily: 'Futura, sans-serif' }}>Eventos Especiales</h1>

			<div style={containerStyle}>
				<div style={{ margin: '10px' }}>
					<Card style={cardStyle}>
						<Card.Img variant="top" src={MesaDeCumple} style={imageStyle} />
						<Card.Body style={bodyStyle}>
							<Card.Title style={titleStyle}>MESA DE CUMPLE</Card.Title>
						</Card.Body>
					</Card>

					<Card style={cardStyle}>
						<Card.Img variant="top" src={VariadosParaFrezzer} style={imageStyle} />
						<Card.Body style={bodyStyle}>
							<Card.Title style={titleStyle}>VARIADOS PARA FREZZER</Card.Title>
						</Card.Body>
					</Card>
				</div>

				<div style={{ margin: '10px' }}>
					<Card style={cardStyle}>
						<Card.Img variant="top" src={CajasDiasEspeciales} style={imageStyle} />
						<Card.Body style={bodyStyle}>
							<Card.Title style={titleStyle}>CAJA DIAS ESPECIALES</Card.Title>
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
						<img src={LogoWhatsapp} alt="WhatsApp" style={logoStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default EventosEspeciales;
