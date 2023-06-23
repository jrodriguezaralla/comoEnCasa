import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Slider = ({ images }) => {
	return (
		<div>
			<Swiper
				slidesPerView={5}
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
