import React, { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const SetArrows = () => {
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
		SetArrows();
	}, []);

	return (
		<div>
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="swiper-container"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} className="imgContainer">
						<img src={image} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
