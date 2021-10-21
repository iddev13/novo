import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./ProductSlider.scss";
// import "swiper/css/navigation"
// import "swiper/css/thumbs"
// import './ProductCard.scss';

import SwiperCore, { Navigation, Thumbs } from 'swiper';

SwiperCore.use([Navigation, Thumbs]);

const ProductCardSlider = (props) => {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>

			<Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="Product" /></SwiperSlide>
			</Swiper>
			<Swiper onSwiper={setThumbsSwiper} spaceBetween={20} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Product" /></SwiperSlide>
				<SwiperSlide><img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="Product" /></SwiperSlide>
			</Swiper>
		</>
	)
}

export default ProductCardSlider;