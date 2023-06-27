import React from 'react';
import LogoWhatsapp from '../assets/Logowhatsapp.jpg';

import '../styles/logowhatsapp.css';

const LogoWhatapp = () => {
	return (
		<div className="logo-whatsapp-container">
			<a href="https://api.whatsapp.com/send?phone=5491123153229" target="_blank" className="logo-whatsapp">
				<img src={LogoWhatsapp} alt="WhatsApp" />
			</a>
		</div>
	);
};

export default LogoWhatapp;
