import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BreadCrumbsMU from '../../common/bread-crumbsMU/BreadCrumbsMU';
import './ProductCard.scss';
import { makeStyles } from '@material-ui/styles';
import ProductCardSlider from './ProductCardSlider';
import ProductCardTable from './ProductCardTable';
import OtherCard from '../../common/cards/other-card/OtherCard';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	root: {},
	svg: {
		fill: '#04c90e52',
	},
	svgActive: {
		fill: '#009661',
	},
	description: {
		overflow: 'hidden',
		margin: '0px 0px 32px 0px',
		'& p:not(:last-child)': {
			margin: '0px 0px 32px 0px',
		}
	},
	hide: {
		maxHeight: 325,
	}
}));

const ProductCard = (props) => {
	const classes = useStyles();
	const [descriptionHeight, setDescriptionHeight] = useState(false);
	const toggleDescription = () => {
		setDescriptionHeight(!descriptionHeight);
	}
	return (
		<section className="productCard">
			<div className="container">
				<header className="productCard__header">
					<BreadCrumbsMU />
				</header>
				<div className="productCard__body body-productCard">
					<article className="body-productCard__article">
						<div className="body-productCard__slider">
							<ProductCardSlider />
						</div>
						<div className="body-productCard__overview">
							<h3 className="info-productCard__title">
								Обзор транспортного средства
							</h3>
							<ProductCardTable />
						</div>
						<div className={
							`${classes.description}
							${!descriptionHeight ? classes.hide : null}`
						}>
							<h3 className="info-productCard__title">
								Описание
							</h3>
							<h5 className="body-productCard__descTitle">Быстроразьёмныое соединение</h5>
							<p className="body-productCard__text">А также диаграммы связей являются только методом политического участия и ограничены исключительно образом мышления. Постоянный количественный рост и сфера нашей активности требует от нас анализа новых принципов формирования материально-технической и кадровой базы. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены на независимые элементы. </p>
							<h5 className="body-productCard__descTitle">Ну и еще пример текста</h5>
							<p className="body-productCard__text">Предварительные выводы неутешительны: перспективное планирование в значительной степени обусловливает важность укрепления моральных ценностей. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam nobis dolores corrupti accusantium enim? Cum libero dolor eveniet aut consequatur expedita magnam exercitationem nemo commodi esse nam facere voluptas officia quaerat, ducimus, quo animi autem vero laborum mollitia reiciendis, quisquam temporibus enim! Et harum labore quaerat totam itaque hic ratione odit sed soluta, ducimus, earum dolores possimus illum. Quisquam nihil deserunt necessitatibus omnis ducimus unde, consequatur, incidunt inventore cumque illum modi consectetur quam exercitationem, id odit cupiditate eligendi distinctio tempora adipisci officiis. Laborum deserunt eius veritatis exercitationem magnam. Ad corporis vitae velit laborum exercitationem odit illo modi alias inventore.</p>
						</div>
						<button
							className="linkSM"
							onClick={toggleDescription}>
							{!descriptionHeight ? 'Показать больше' : 'Скрыть'}
						</button>
					</article>
					<aside className="body-productCard__aside">
						<div className="body-productCard__info info-productCard">
							<header className="info-productCard__header">
								<h2 className="info-productCard__title">
									Nissan Eco T 100 Paardenvervoer / BJ: 1995 ledig gewicht
								</h2>
								<h6 className="info-productCard__subtitle">Закрытые грузовые автомобили</h6>
								<button className="info-productCard__wishlist">
									<FavoriteIcon className={classes.svg} />
								</button>
							</header>
							<div className="info-productCard__minD">
								<div className="info-productCard__minD-item">
									<div className="body-productCard__name">Год выпуска</div>
									<div className="body-productCard__value info-productCard__minD-year">1996 <span>год</span></div>
								</div>
								<div className="info-productCard__minD-item">
									<div className="body-productCard__name">Пробег</div>
									<div className="body-productCard__value  info-productCard__minD-mileage">360 000 <span>km</span></div>
								</div>
								<div className="info-productCard__minD-item">
									<div className="body-productCard__name">Цена брутто</div>
									<div className="body-productCard__value  info-productCard__minD-grossPrice">3 751 <span>€</span></div>
								</div>
							</div>
							<NavLink to="/" className="linkSM">Смотреть все позиции продавца OTP Leasing</NavLink>
						</div>
						<footer className="body-productCard__footer">
							<div className="body-productCard__price">3100 <span>€</span></div>
							<NavLink to="/" className="link">Написать продавцу</NavLink>
						</footer>
					</aside>
				</div>
				<footer className="productCard__footer">
					<h2 className="info-productCard__title">
						Похожие объявления
					</h2>
					<div className="productCard__similarAds">
						<OtherCard />
						<OtherCard />
						<OtherCard />
						<OtherCard />
					</div>
				</footer>
			</div>
		</section>
	)
}

export default ProductCard;