import FooterFacebook from '../common/sprite/FooterFacebook';
import FooterInstagram from '../common/sprite/FooterIstagram';
import FooterYoutube from '../common/sprite/FooterYoutube';
import classes from './Footer.module.scss';
import logo from '../../image/NOVO-white.svg';

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
			<div className="container">
				<section className={classes.footer__inner}>
					<div className={classes.footer__left}>
						<div className={classes.footer__logo}>
							<a href="/">
								<img src={logo} alt="Logo" />
							</a>
						</div>
						<p className={classes.centerFooter__title}>
							Маркетплейс коммерчиского транспорта и тяжелой техники
						</p>
					</div>
					<div className={`${classes.footer__center} ${classes.centerFooter}`}>
						<h5 className={classes.centerFooter__title}>Покупателю</h5>
						<ul className={classes.centerFooter__list}>
							<li>
								<ul className={classes.centerFooter__sublist}>
									<li><a href="/">Служба поддержки</a></li>
									<li><a href="/">Служба поддержки</a></li>
									<li><a href="/">Служба поддержки</a></li>
								</ul>
							</li>
							<li>
								<ul className={classes.centerFooter__sublist}>
									<li><a href="/">Стать продавцем</a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div className={`${classes.footer__social} ${classes.socialFooter}`}>
						<h5 className={classes.centerFooter__title}>Следите за нами</h5>
						<ul className={classes.socialFooter__list}>
							<li><FooterFacebook /></li>
							<li><FooterInstagram /></li>
							<li><FooterYoutube /></li>
						</ul>
					</div>
				</section>
				<div className={classes.footer__copyright}>
					<span>© 2019–2020 Группа компаний «NOVO»</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer;