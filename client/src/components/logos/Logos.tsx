import { LogosType } from '../../redux/reducers/logos-reducer';
import './Logos.scss';

const Logos: React.FC<any> = ({ logos }) => {
	return (
		<section className="logos">
			<div className="container">
				<div className="logos__inner">
					<div className="logos__images">{
							logos.map((elem: LogosType) => {
								return <a href={elem.address} className="logos__image" key={elem.id}>
									<img src={elem.image} alt={elem.alt} />
								</a>
							})}
					</div>
					<div className="logos__description">
						<h2 className="logos__title">Наши продавцы</h2>
						<p className="logos__text">Мы работаем только  с лучшимы игроками на рынке. Безопасность сделки обеспечена</p>
						<a href="/" className="logos__link link">показать всех</a>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Logos;