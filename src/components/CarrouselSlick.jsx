import React from 'react';
import Slider from 'react-slick';

const CarrouselSlick = ({ images }) => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 3,
		speed: 500,
	};
	return (
		<div>
			<h2>Center Mode</h2>
			<Slider {...settings}>
				{images.map((image) => (
					<div key={image} className="imgContainer">
						<img src={image} alt="" />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default CarrouselSlick;
