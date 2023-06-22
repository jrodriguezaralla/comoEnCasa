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

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/carrousel.css';

const Carrousel = ({ images }) => {
	return (
		<div className="sliderContainer">
			<Swiper
				slidesPerView={5}
				spaceBetween={20}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
			>
				{images.map((image) => (
					<SwiperSlide className="imgContainer">
						<img src={image} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carrousel;
