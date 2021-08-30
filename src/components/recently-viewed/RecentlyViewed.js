import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './RecentlyViewed.scss';
import OtherCard from '../common/cards/other-card/OtherCard';
import SliderArrow from '../common/sprite/SliderArrow';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const RecentlyViewed = () => {
	return (
		<section className="recently-viewed">
			<div className="container">
				<div className="recently-viewed__inner">
					<h2 className="recently-viewed__title">Недавно просмотренные</h2>
					<div className="recently-viewed__button swiper-next">
						<SliderArrow />
					</div>
					<div className="recently-viewed__button swiper-prev">
						<SliderArrow />
					</div>
					<div className="recently-viewed-slider">
						<Swiper
							spaceBetween={20}
							slidesPerView={4}
							navigation={
								{
									nextEl: '.swiper-next',
									prevEl: '.swiper-prev',
								}
							}
							loop={true}
							breakpoints={
								{
									// when window width is >= 320px
									320: {
										slidesPerView: 1.5,
										spaceBetween: 20
									},
									// when window width is >= 480px
									768: {
										slidesPerView: 3,
										spaceBetween: 30
									},
									// when window width is >= 640px
									1000: {
										slidesPerView: 4,
										spaceBetween: 40
									}
								}
							}
							style={{ width: '100%', paddingTop: '15px' }}
						>
							<SwiperSlide><OtherCard /></SwiperSlide>
							<SwiperSlide><OtherCard /></SwiperSlide>
							<SwiperSlide><OtherCard /></SwiperSlide>
							<SwiperSlide><OtherCard /></SwiperSlide>
							<SwiperSlide><OtherCard /></SwiperSlide>
							<SwiperSlide><OtherCard /></SwiperSlide>
							<SwiperSlide><OtherCard /></SwiperSlide>
							<SwiperSlide><OtherCard /></SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}

export default RecentlyViewed;