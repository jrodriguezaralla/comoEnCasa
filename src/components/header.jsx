import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/header.css';

function Header() {
	return (
		<header className="header-container w-100">
			<div>
				<img id="header-logo" src={logo} alt="Logo" />
			</div>
			<div className="header-title-container w-75">
				<h1 id="header-title">
					<div style={{ marginTop: '10px' }}>¡Te doy la bienvenida a mi página web! Gracias por estar acá.</div>
					<div>
						En esta página podrás ver un poco de los productos que hago y conocerme. Todos son realizados por encargo y en forma casera.
					</div>
					<div>Te invito a recorrer mi página y contactarme para armar juntos la mejor propuesta personalizada.</div>
				</h1>
			</div>
		</header>
	);
}

export default Header;
