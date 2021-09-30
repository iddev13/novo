import './404.scss';
import image from '../../../image/404/error.jpg';
import imageMin from '../../../image/404/error.min.jpg';

const Page404 = () => {
	return (
		<section className="page404">
				<div className="page404__inner">
					<picture>
						<source media="(max-width: 768px)" srcSet={imageMin} />
						<img src={image} alt="Error" />
					</picture>
				</div>
		</section>
	)
}

export default Page404;