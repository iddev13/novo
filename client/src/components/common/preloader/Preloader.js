import './Preloader.scss';
import PreloaderImage from '../../../image/preloader/preloader.svg';

const Preloader = () => {
	return (
		<div className="preloader">
			<div className="preloader__image">
				<img src={PreloaderImage} alt="Loading..." />
			</div>
		</div>
	)
}

export default Preloader;