import OtherCard from "../common/cards/other-card/OtherCard";
// Import Swiper styles
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const TopAdsSlider = () => {
	return (
		<Swiper
			spaceBetween={50}
			// onDestroy={() => { console.log('destroy'); }}
			// pagination={{ clickable: true }}
			// scrollbar={{ draggable: true }}
			// onInit={() => { console.log('init'); }}
			// onSwiper={(swiper) => console.log(swiper)}
			// onSlideChange={() => console.log('slide change')}
			// effect="fade"
			breakpoints={{
				320: {
					slidesPerView: 1.5,
					spaceBetween: 20,

				},
			}}
			style={{ width: '100%', }}
		>
			<SwiperSlide>
				<OtherCard />
			</SwiperSlide>
			<SwiperSlide>
				<OtherCard />
			</SwiperSlide>
			<SwiperSlide>
				<OtherCard />
			</SwiperSlide>
			<SwiperSlide>
				<OtherCard />
			</SwiperSlide>
			<SwiperSlide>
				<OtherCard />
			</SwiperSlide>
			<SwiperSlide>
				<OtherCard />
			</SwiperSlide>
			<SwiperSlide>
				<OtherCard />
			</SwiperSlide>
		</Swiper>
	)
}

export default TopAdsSlider;