
import './Header.scss';
import Logo from './logo/Logo';
import NavContainer from './nav/NavContainer';

const Header = (props) => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Logo />
					<NavContainer />
				</div>
			</div>
		</header>
	)
}

export default Header;