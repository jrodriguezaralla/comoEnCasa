/*import React, { useState, useRef } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../styles/carrousel.css';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1550 },
		items: 5,
		slidesToSlide: 1,
	},
	desktop: {
		breakpoint: { max: 1550, min: 960 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 960, min: 650 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 650, min: 0 },
		items: 1,
	},
};

const Carrousel = ({ images }) => {
	const scaleTransform = 1.2; // Escala de transformación para la imagen actual

	const carouselRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleBeforeChange = (from, to) => {
		setActiveIndex(to);
	};

	return (
		<div className="carouselContainer">
			<Carousel
				responsive={responsive}
				infinite={true}
				showDots={true}
				swipeable={false}
				draggable={false}
				renderButtonGroupOutside={true}
				beforeChange={handleBeforeChange}
			>
				{images.map((image, index) => (
					<div
						key={index}
						className={`imgContainer ${index === activeIndex ? 'active' : ''}`}
						style={{
							transform: index === activeIndex ? `scale(${scaleTransform})` : 'none',
							transition: 'transform 0.5s',
						}}
					>
						<img src={image} alt="" />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Carrousel;*/

import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/carrousel.css';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1550 },
		items: 5,
		slidesToSlide: 1,
	},
	desktop: {
		breakpoint: { max: 1550, min: 960 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 960, min: 650 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 650, min: 0 },
		items: 1,
	},
};

const Carrousel = ({ images }) => {
	const finalWidth = 380; // Ancho final deseado después de la transformación
	const finalHeight = 380; // Alto final deseado después de la transformación

	const calculateScaleTransform = (width, height) => {
		const scaleX = finalWidth / width;
		const scaleY = finalHeight / height;
		return Math.min(scaleX, scaleY);
	};

	const [activeIndex, setActiveIndex] = useState(2);
	const carouselRef = useRef(null);

	const handleNextSlide = () => {
		carouselRef.current.next();
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrevSlide = () => {
		carouselRef.current.previous();
		setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className="carouselContainer">
			<Carousel
				ref={carouselRef}
				responsive={responsive}
				infinite={true}
				centerMode={true}
				containerClass="carouselContainer"
				itemClass="carouselItem"
				renderButtonGroupOutside={true}
				customButtonGroup={<CustomButtonGroup onPrev={handlePrevSlide} onNext={handleNextSlide} />}
			>
				{images.map((image, index) => (
					<div key={index} className="imgContainer">
						<img
							src={image}
							alt=""
							style={{
								width: '305.3px',
								height: '310px',
								transform: index === activeIndex ? `scale(${calculateScaleTransform(305.3, 310)})` : 'none',
								transition: 'transform 0.5s',
							}}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};

const CustomButtonGroup = ({ onPrev, onNext }) => (
	<div className="customButtonGroup">
		<button className="customButton prevButton" onClick={onPrev}>
			&lt;
		</button>
		<button className="customButton nextButton" onClick={onNext}>
			&gt;
		</button>
	</div>
);

export default Carrousel;
