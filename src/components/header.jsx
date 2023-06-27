import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/header.css';

function Header() {
	useEffect(() => {
		const handleScroll = () => {
			const logo = document.querySelector('#header-logo');
			const header = document.querySelector('header');
			const h1 = document.querySelector('#header-title');

			if (window.scrollY > 0) {
				logo.style.opacity = '0';
				header.style.backgroundColor = 'transparent';
				h1.style.opacity = '0';
			} else {
				logo.style.opacity = '1';
				header.style.backgroundColor = 'white';
				h1.style.opacity = '1';
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className="header-container">
			<div>
				<img id="header-logo" src={logo} alt="Logo" />
			</div>
			<div className="header-title-container">
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
