import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/slider.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const setArrows = () => {
	const myArrowNext = document.querySelector('.swiper-button-next');
	const myArrowprev = document.querySelector('.swiper-button-prev');
	myArrowNext.style.backgroundColor = 'red';
	myArrowNext.style.marginRight = '10%';
	myArrowNext.style.backgroundColor = '#4f2d24';
	myArrowNext.style.height = '60px';
	myArrowNext.style.width = '60px';
	myArrowNext.style.borderRadius = '50%';
	myArrowNext.style.justifyContent = 'center';
	myArrowNext.style.alignItems = 'center';
	myArrowNext.style.color = 'white';
	myArrowNext.style.fontWeight = 'bold';
	myArrowNext.style.fontSize = '2px';

	myArrowprev.style.backgroundColor = 'red';
	myArrowprev.style.marginLeft = '10%';
	myArrowprev.style.backgroundColor = '#4f2d24';
	myArrowprev.style.height = '60px';
	myArrowprev.style.width = '60px';
	myArrowprev.style.borderRadius = '50%';
	myArrowprev.style.justifyContent = 'center';
	myArrowprev.style.alignItems = 'center';
	myArrowprev.style.color = 'white';
	myArrowprev.style.fontWeight = 'bold';
};

const Slider = ({ images }) => {
	useEffect(() => {
		setArrows();
	}, []);

	return (
		<div className="container">
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 0,
					stretch: 20,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="swiper_container"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img src={image} alt="" />
					</SwiperSlide>
				))}
				<div className="slider-controler">
					<div className="swiper-pagination"></div>
				</div>

				<div className="swiper-button-prev slider-arrow"></div>
				<div className="swiper-button-next slider-arrow"></div>
			</Swiper>
		</div>
	);
};

export default Slider;
