import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../styles/carrousel.css';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1024 },
		items: 5,
		slidesToSlide: 1,
	},
	desktop: {
		breakpoint: { max: 1024, min: 800 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 800, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const Carrousel = ({ images }) => {
	return (
		<div className="carouselContainer">
			<Carousel responsive={responsive} infinite={true} showDots={true} swipeable={false} draggable={false}>
				{images.map((image) => (
					<div key={image} className="imgContainer">
						<img src={image} alt="" />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Carrousel;
